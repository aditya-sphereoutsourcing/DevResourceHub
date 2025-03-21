/**
 * DevLibGuide Type Definitions
 * 
 * This file contains the core type definitions used throughout the application.
 * These types define the structure of our data and ensure type safety.
 */

import { LibraryTag, SupportedLanguage } from "@/data/constants";

/**
 * Represents a programming library with its metadata
 */
export interface Library {
  name: string;                 // Library name (e.g., "React", "math.h")
  version: string;              // Version or standard reference 
  description: string;          // Detailed description of functionality
  tags: string[];               // Categorization tags from standardized list
  compatibility: string;        // Version requirements, platform support
  documentationUrl: string;     // Link to official documentation
}

/**
 * Collection of libraries organized by programming language
 */
export interface Libraries {
  c: Library[];                 // C programming language libraries
  cpp: Library[];               // C++ programming language libraries
  java: Library[];              // Java programming language libraries
  javascript: Library[];        // JavaScript programming language libraries
  python: Library[];            // Python programming language libraries
  swift: Library[];           // Swift programming language libraries
  rust: Library[];            // Rust programming language libraries
}

/**
 * Future types for planned features
 */

// For version tracking feature
export interface VersionHistory {
  version: string;
  releaseDate: string;
  changes: string[];
  breakingChanges: boolean;
}

// For tutorials/examples section
export interface LibraryExample {
  libraryName: string;
  language: SupportedLanguage;
  title: string;
  description: string;
  code: string;
  author?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}