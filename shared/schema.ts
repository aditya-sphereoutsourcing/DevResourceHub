import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Define the library schema
export const libraries = pgTable("libraries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  language: text("language").notNull(),
  version: text("version").notNull(),
  description: text("description").notNull(),
  tags: text("tags").array().notNull(),
  compatibility: text("compatibility").notNull(),
  documentationUrl: text("documentation_url").notNull(),
});

// Define the insert schema for libraries
export const insertLibrarySchema = createInsertSchema(libraries).pick({
  name: true,
  language: true,
  version: true,
  description: true,
  tags: true,
  compatibility: true,
  documentationUrl: true,
});

// Keep original users schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertLibrary = z.infer<typeof insertLibrarySchema>;
export type Library = typeof libraries.$inferSelect;
