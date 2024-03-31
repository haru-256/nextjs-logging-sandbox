"use client";

import { logger } from "@/lib/logger";

export default function Client() {
  logger.info("from Client component");
  return <h1>Next.js</h1>;
}
