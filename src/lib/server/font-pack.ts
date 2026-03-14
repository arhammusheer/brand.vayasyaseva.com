import { promises as fs } from "node:fs";
import path from "node:path";
import { zipSync } from "fflate";

export const FONT_PACK_FILENAME = "vayasya-font-pack.zip";

const FONT_PACK_ROOT = path.join(process.cwd(), "assets", "brand-font-pack");

const FONT_FILE_EXTENSIONS = new Set([".ttf", ".otf", ".woff", ".woff2"]);
const META_FILE_EXTENSIONS = new Set([".txt"]);

const REQUIRED_FONT_FILES = [
  "Anek/Anek[wdth,wght].ttf",
  "Hind/Hind-Regular.ttf",
  "Hind/Hind-Medium.ttf",
  "Hind/Hind-SemiBold.ttf",
  "Hind/Hind-Bold.ttf",
  "JetBrains_Mono/JetBrainsMono[wght].ttf",
] as const;

export class FontPackMissingFilesError extends Error {
  readonly missingFiles: readonly string[];

  constructor(missingFiles: readonly string[]) {
    super("Font pack is missing required files.");
    this.name = "FontPackMissingFilesError";
    this.missingFiles = missingFiles;
  }
}

type BuildFontPackResult = {
  archive: Uint8Array;
  fileCount: number;
};

export async function buildFontPackArchive(): Promise<BuildFontPackResult> {
  await assertRequiredFontFilesExist();

  const allFiles = await collectFiles(FONT_PACK_ROOT);
  const includedFiles = allFiles
    .filter(isIncludedPackFile)
    .sort((a, b) => a.localeCompare(b));

  if (includedFiles.length === 0) {
    throw new Error(`No font files found in ${FONT_PACK_ROOT}.`);
  }

  const zipInput: Record<string, Uint8Array> = {};

  await Promise.all(
    includedFiles.map(async (absolutePath) => {
      const fileBuffer = await fs.readFile(absolutePath);
      const relativePath = toZipPath(path.relative(FONT_PACK_ROOT, absolutePath));

      zipInput[relativePath] = fileBuffer;
    }),
  );

  return {
    archive: zipSync(zipInput, { level: 9 }),
    fileCount: includedFiles.length,
  };
}

async function assertRequiredFontFilesExist(): Promise<void> {
  const missingFiles: string[] = [];

  await Promise.all(
    REQUIRED_FONT_FILES.map(async (relativePath) => {
      const absolutePath = path.join(FONT_PACK_ROOT, relativePath);

      try {
        await fs.access(absolutePath);
      } catch {
        missingFiles.push(relativePath);
      }
    }),
  );

  if (missingFiles.length > 0) {
    missingFiles.sort((a, b) => a.localeCompare(b));
    throw new FontPackMissingFilesError(missingFiles);
  }
}

async function collectFiles(directoryPath: string): Promise<string[]> {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files: string[] = [];

  await Promise.all(
    entries.map(async (entry) => {
      const absolutePath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        files.push(...(await collectFiles(absolutePath)));
        return;
      }

      if (entry.isFile()) {
        files.push(absolutePath);
      }
    }),
  );

  return files;
}

function isIncludedPackFile(filePath: string): boolean {
  const extension = path.extname(filePath).toLowerCase();
  return FONT_FILE_EXTENSIONS.has(extension) || META_FILE_EXTENSIONS.has(extension);
}

function toZipPath(filePath: string): string {
  return filePath.split(path.sep).join("/");
}
