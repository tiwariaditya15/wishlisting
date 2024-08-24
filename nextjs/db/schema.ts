import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const wishlistTable = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  item: text("item").notNull(),
  state: integer("state").notNull(),
});

export type InsertWishlist = typeof wishlistTable.$inferInsert;
export type SelectWishlist = typeof wishlistTable.$inferSelect;
