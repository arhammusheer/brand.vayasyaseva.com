import { promises as fs } from "node:fs";
import path from "node:path";
import { strToU8, zipSync } from "fflate";
import sharp from "sharp";

const LOGO_SOURCE_ROOT = path.join(process.cwd(), "public", "brand", "logos");
const PUBLIC_ROOT = path.join(process.cwd(), "public");

const REQUIRED_LOGO_FILES = [
  "master-logo-light.svg",
  "master-logo-dark.svg",
  "vertical-seva.svg",
  "vertical-setu.svg",
  "vertical-kaushal.svg",
  "vertical-prabandh.svg",
] as const;

const PNG_EXPORT_WIDTHS = [128, 256, 512, 1024, 2048] as const;

const OPTIONAL_MEDIA_FILES = [
  { source: "favicon.ico", target: "media/web/favicon.ico" },
  { source: "favicon-16x16.png", target: "media/web/favicon-16x16.png" },
  { source: "favicon-32x32.png", target: "media/web/favicon-32x32.png" },
  { source: "apple-touch-icon.png", target: "media/web/apple-touch-icon.png" },
  { source: "android-chrome-192x192.png", target: "media/web/android-chrome-192x192.png" },
  { source: "android-chrome-512x512.png", target: "media/web/android-chrome-512x512.png" },
  { source: "site.webmanifest", target: "media/web/site.webmanifest" },
] as const;

export const LOGO_PACK_PROFILES = ["svg", "png", "media"] as const;
export type LogoPackProfile = (typeof LOGO_PACK_PROFILES)[number];

export class LogoPackMissingFilesError extends Error {
  readonly missingFiles: readonly string[];

  constructor(missingFiles: readonly string[]) {
    super("Logo pack is missing required source files.");
    this.name = "LogoPackMissingFilesError";
    this.missingFiles = missingFiles;
  }
}

type LogoPackBuildResult = {
  archive: Uint8Array;
  filename: string;
  fileCount: number;
};

type LogoSourceFile = {
  name: string;
  buffer: Buffer;
};

export function resolveLogoPackProfile(rawProfile: string | null): LogoPackProfile | null {
  if (!rawProfile) {
    return "media";
  }

  const value = rawProfile.toLowerCase();
  return LOGO_PACK_PROFILES.includes(value as LogoPackProfile) ? (value as LogoPackProfile) : null;
}

export async function buildLogoPackArchive(profile: LogoPackProfile): Promise<LogoPackBuildResult> {
  const sourceFiles = await readLogoSourceFiles();
  const zipInput: Record<string, Uint8Array> = {};

  zipInput["README.txt"] = strToU8(buildPackReadme(profile));

  if (profile === "svg" || profile === "media") {
    for (const sourceFile of sourceFiles) {
      zipInput[`logos/svg/${sourceFile.name}`] = sourceFile.buffer;
    }
  }

  if (profile === "png" || profile === "media") {
    for (const sourceFile of sourceFiles) {
      const logoBaseName = path.parse(sourceFile.name).name;
      for (const width of PNG_EXPORT_WIDTHS) {
        const pngBuffer = await svgToPng(sourceFile.buffer, width);
        zipInput[`logos/png/${width}w/${logoBaseName}-${width}w.png`] = pngBuffer;
      }
    }
  }

  if (profile === "media") {
    for (const mediaFile of OPTIONAL_MEDIA_FILES) {
      const absolutePath = path.join(PUBLIC_ROOT, mediaFile.source);
      if (await fileExists(absolutePath)) {
        zipInput[mediaFile.target] = await fs.readFile(absolutePath);
      }
    }
  }

  const generatedAt = new Date().toISOString();
  const manifest = {
    profile,
    generatedAt,
    sourceLogos: sourceFiles.map((file) => file.name),
    pngWidths: [...PNG_EXPORT_WIDTHS],
    fileCount: Object.keys(zipInput).length + 1,
  };
  zipInput["manifest.json"] = strToU8(`${JSON.stringify(manifest, null, 2)}\n`);

  return {
    archive: zipSync(zipInput, { level: 9 }),
    filename: `vayasya-logo-${profile}-pack.zip`,
    fileCount: Object.keys(zipInput).length,
  };
}

async function readLogoSourceFiles(): Promise<readonly LogoSourceFile[]> {
  const missingFiles: string[] = [];

  await Promise.all(
    REQUIRED_LOGO_FILES.map(async (fileName) => {
      const absolutePath = path.join(LOGO_SOURCE_ROOT, fileName);
      if (!(await fileExists(absolutePath))) {
        missingFiles.push(fileName);
      }
    }),
  );

  if (missingFiles.length > 0) {
    missingFiles.sort((a, b) => a.localeCompare(b));
    throw new LogoPackMissingFilesError(missingFiles);
  }

  const entries = await fs.readdir(LOGO_SOURCE_ROOT, { withFileTypes: true });
  const svgFiles = entries
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".svg"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  return Promise.all(
    svgFiles.map(async (fileName) => ({
      name: fileName,
      buffer: await fs.readFile(path.join(LOGO_SOURCE_ROOT, fileName)),
    })),
  );
}

async function svgToPng(svgBuffer: Buffer, width: number): Promise<Buffer> {
  return sharp(svgBuffer, { density: 600 })
    .resize({ width, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function buildPackReadme(profile: LogoPackProfile): string {
  const profileDescription: Record<LogoPackProfile, string> = {
    svg: "SVG source pack for design and print workflows.",
    png: "PNG exports in multiple widths for quick production usage.",
    media: "Complete media kit with SVG, PNG, and web/app icon assets.",
  };

  return [
    "Vayasya Logo Pack",
    "",
    `Profile: ${profile}`,
    `Description: ${profileDescription[profile]}`,
    "",
    "Usage notes:",
    "- Use SVG for print, scaling, and editing in vector tools.",
    "- Use PNG for presentations, documents, and tools without SVG support.",
    "- Do not recolor or distort logo assets.",
    "",
    `PNG widths: ${PNG_EXPORT_WIDTHS.join(", ")} px`,
    "",
    "Generated from /public/brand/logos.",
  ].join("\n");
}
