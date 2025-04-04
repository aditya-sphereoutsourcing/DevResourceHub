/**
 * DevLibGuide Data Module
 * 
 * Central export file for all data-related modules.
 * This prevents circular dependencies when importing from multiple places.
 */

// Export the constants
export * from "./constants";

// Import and re-export the libraries from their language-specific files
import { cLibraries } from "./libraries/c";
import { cppLibraries } from "./libraries/cpp";
import { javaLibraries } from "./libraries/java";
import { javascriptLibraries } from "./libraries/javascript";
import { pythonLibraries } from "./libraries/python";
import { rustLibraries } from "./libraries/rust";
import { swiftLibraries } from "./libraries/swift";
import { Libraries } from "@/types";

// Create and export the libraries object
export const libraries: Libraries = {
  c: cLibraries,
  cpp: cppLibraries,
  java: javaLibraries,
  javascript: javascriptLibraries,
  python: pythonLibraries,
  rust: rustLibraries,
  swift: swiftLibraries
};

// Export individual language libraries for direct access when needed
export {
  cLibraries,
  cppLibraries,
  javaLibraries,
  javascriptLibraries,
  pythonLibraries,
  rustLibraries,
  swiftLibraries
};