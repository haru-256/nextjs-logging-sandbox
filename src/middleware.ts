import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "@/lib/logger";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // console.log("Logging on middleware");
  // logger.info(
  //   {
  //     requestUrl: request.nextUrl.pathname,
  //     requestParams: request.nextUrl.searchParams.toString(),
  //   },
  //   "Logging on middleware"
  // );
}
