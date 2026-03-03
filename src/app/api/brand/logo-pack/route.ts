import { NextRequest, NextResponse } from "next/server";
import {
  buildLogoPackArchive,
  LOGO_PACK_PROFILES,
  LogoPackMissingFilesError,
  resolveLogoPackProfile,
} from "@/lib/server/logo-pack";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const profile = resolveLogoPackProfile(request.nextUrl.searchParams.get("profile"));

  if (!profile) {
    return NextResponse.json(
      {
        error: "Invalid logo pack profile.",
        allowedProfiles: LOGO_PACK_PROFILES,
      },
      { status: 400 },
    );
  }

  try {
    const { archive, filename, fileCount } = await buildLogoPackArchive(profile);

    return new NextResponse(Buffer.from(archive), {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename=\"${filename}\"`,
        "Cache-Control": "no-store",
        "X-Logo-Pack-Profile": profile,
        "X-Logo-Pack-Count": String(fileCount),
      },
    });
  } catch (error) {
    if (error instanceof LogoPackMissingFilesError) {
      return NextResponse.json(
        {
          error: "Logo pack is unavailable because required source files are missing.",
          missingFiles: error.missingFiles,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to build logo pack archive.",
      },
      { status: 500 },
    );
  }
}
