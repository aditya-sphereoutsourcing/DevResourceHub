/**
 * Library Data Module
 * 
 * This file serves as the central export point for all language-specific library collections.
 * It combines the separate language library files into a unified export structure.
 * 
 * To add a new programming language:
 * 1. Create a new file for that language (e.g., python.ts)
 * 2. Export a typed array of libraries following the Library interface
 * 3. Import and add that array to the Libraries object below
 * 4. Update the SUPPORTED_LANGUAGES constant in ../constants.ts
 */

import { Libraries } from "@/types";
import { cLibraries } from "./c";
import { cppLibraries } from "./cpp";
import { javaLibraries } from "./java";
import { javascriptLibraries } from "./javascript";

// Combined libraries object that matches the Libraries interface
export const libraries: Libraries = {
  c: cLibraries,
  cpp: cppLibraries,
  java: javaLibraries,
  javascript: javascriptLibraries,
};

// Export individual language libraries for direct access when needed
export {
  cLibraries,
  cppLibraries,
  javaLibraries,
  javascriptLibraries
};