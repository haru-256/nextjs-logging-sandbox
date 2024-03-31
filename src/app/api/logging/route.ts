export const dynamic = "force-dynamic";
import { NextResponse, type NextRequest } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const data = await request.json();
  switch (data?.level) {
    case "info":
      logger.info(data);
      break;
    case "error":
      logger.error(data);
      break;
    default:
      logger.warn(data, "dose not match any level");
      break;
  }
  return NextResponse.json({ message: "ok" });
}
