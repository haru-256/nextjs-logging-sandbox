export const dynamic = "force-dynamic";
import { NextResponse, type NextRequest } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const data: { level: string; messages: [any] } = await request.json();
  switch (data?.level) {
    case "info":
      logger.info(...data.messages);
      break;
    case "error":
      logger.error(...data.messages);
      break;
    default:
      logger.warn(...data.messages);
      break;
  }
  return NextResponse.json({ message: "ok" });
}
