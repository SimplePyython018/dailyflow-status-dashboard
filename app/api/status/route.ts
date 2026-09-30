import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mode: "demo",
    system: "LoveLife Ops",
    relationshipStatus: "fictional-demo-only",
    privacy: "no-personal-data",
    message: "Work.exe is running normally. Coffee protocol available.",
  });
}
