import { NextResponse } from "next/server";
import {
  buildFontPackArchive,
  FONT_PACK_FILENAME,
  FontPackMissingFilesError,
} from "@/lib/server/font-pack";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { archive, fileCount } = await buildFontPackArchive();

    return new NextResponse(Buffer.from(archive), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename=\"${FONT_PACK_FILENAME}\"`,
        "Cache-Control": "no-store",
        "X-Font-Pack-Count": String(fileCount),
      },
    });
  } catch (error) {
    if (error instanceof FontPackMissingFilesError) {
      return NextResponse.json(
        {
          error: "Font pack is unavailable because required files are missing on the server.",
          missingFiles: error.missingFiles,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to build the font pack archive.",
      },
      { status: 500 },
    );
  }
}
