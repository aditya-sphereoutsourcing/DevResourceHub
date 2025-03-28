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

// Tutorials schema
export const tutorials = pgTable("tutorials", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  language: text("language").notNull(),
  libraryName: text("library_name").notNull(),
  difficulty: text("difficulty").notNull(), // beginner, intermediate, advanced
  author: text("author"),
  publishDate: text("publish_date").notNull(),
  lastUpdated: text("last_updated").notNull(),
  content: text("content").notNull(),
  tags: text("tags").array().notNull(),
  readTime: integer("read_time").notNull(), // in minutes
  codeExamples: text("code_examples").array(),
  relatedTutorials: text("related_tutorials").array(),
});

// Define the insert schema for tutorials
export const insertTutorialSchema = createInsertSchema(tutorials).pick({
  title: true,
  slug: true,
  language: true,
  libraryName: true,
  difficulty: true,
  author: true,
  publishDate: true,
  lastUpdated: true,
  content: true,
  tags: true,
  readTime: true,
  codeExamples: true,
  relatedTutorials: true,
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
export type Tutorial = typeof tutorials.$inferSelect;
export type InsertTutorial = z.infer<typeof insertTutorialSchema>;
export type Version = typeof versions.$inferSelect;
export type Review = typeof reviews.$inferSelect;
export type Analytics = typeof analytics.$inferSelect;
