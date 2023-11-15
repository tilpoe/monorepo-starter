import { primaryId, string } from "@/server/db/types";
import { mysqlTable } from "drizzle-orm/mysql-core";

/* -------------------------------------------------------------------------- */
/*                                 UserAccount                                */
/* -------------------------------------------------------------------------- */

export const tUserAccounts = mysqlTable("UserAccount", {
  id: primaryId(),
  email: string("email").notNull(),
  password: string("password").notNull(),
});

export type TUserAccount = typeof tUserAccounts.$inferSelect;
