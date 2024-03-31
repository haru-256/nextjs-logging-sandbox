import { logger } from "@/lib/logger";
import Client from "@/components/client";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  logger.info(
    { query: searchParams?.query, page: searchParams?.page },
    `from Server Component`
  );
  return (
    <main>
      <Client />
    </main>
  );
}
