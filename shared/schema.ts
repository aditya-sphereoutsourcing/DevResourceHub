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
// Example and integration pattern schema
export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  libraryId: integer("library_id").notNull(),
  title: text("title").notNull(),
  code: text("code").notNull(),
  description: text("description").notNull(),
});

// Version history schema
export const versions = pgTable("versions", {
  id: serial("id").primaryKey(),
  libraryId: integer("library_id").notNull(),
  version: text("version").notNull(),
  releaseDate: text("release_date").notNull(),
  breakingChanges: boolean("breaking_changes").notNull(),
  changes: text("changes").array().notNull(),
});

// Community reviews schema
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  libraryId: integer("library_id").notNull(),
  userId: integer("user_id").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  experience: text("experience").notNull(),
});

// Analytics schema
export const analytics = pgTable("analytics", {
  id: serial("id").primaryKey(),
  libraryId: integer("library_id").notNull(),
  downloads: integer("downloads").notNull(),
  stars: integer("stars").notNull(),
  issues: integer("issues").notNull(),
  lastUpdate: text("last_update").notNull(),
});

export type Library = typeof libraries.$inferSelect;
export type Example = typeof examples.$inferSelect;
export type Version = typeof versions.$inferSelect;
export type Review = typeof reviews.$inferSelect;
export type Analytics = typeof analytics.$inferSelect;
