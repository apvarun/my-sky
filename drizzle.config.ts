import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema.ts",
  out: "./migrations",
  driver: "d1-http",
  dialect: "sqlite",
} satisfies Config;
