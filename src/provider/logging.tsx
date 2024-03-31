"use client";
import React from "react";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function Logging({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const body = JSON.stringify({
      level: "info",
      requestPath: pathname,
      requestParams: searchParams.toString(),
    });
    axios
      .post("/api/logging", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {});
  });
  return <>{children}</>;
}

export default function LoggingProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <Logging>{children}</Logging>
    </Suspense>
  );
}
