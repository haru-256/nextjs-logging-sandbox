export const dynamic = "force-dynamic";
import { NextResponse, type NextRequest } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const data = await request.json();
  logger.info(data, "Logging on POST");
  return NextResponse.json({ message: "ok" });
}
