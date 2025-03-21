/**
 * Library Data Module
 * 
 * This file serves as the central export point for all language-specific library collections.
 * 
 * To add a new programming language:
 * 1. Create a new file for that language (e.g., python.ts)
 * 2. Export a typed array of libraries following the Library interface
 * 3. Import and add that array to the main data module in ../index.ts
 * 4. Update the SUPPORTED_LANGUAGES constant in ../constants.ts
 */

// Export individual language libraries
export { cLibraries } from "./c";
export { cppLibraries } from "./cpp";
export { javaLibraries } from "./java";
export { javascriptLibraries } from "./javascript";
export { pythonLibraries } from "./python";