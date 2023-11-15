import { env } from "@/env.mjs";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/main/schema",
  driver: "mysql2",
  dbCredentials: {
    uri: env.DATABASE_URL,
  },
} satisfies Config;
