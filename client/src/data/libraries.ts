/**
 * Library Data Module
 * 
 * This file is the main export point for library data used throughout the application.
 * It re-exports the libraries collection from the organized language-specific files.
 * 
 * For detailed documentation on how to add or modify libraries, see:
 * 1. README.md in the project root
 * 2. The comments in each language-specific file in ./libraries/
 * 3. The constants.ts file for standardized tag categories
 */

// Re-export the libraries from the structured imports
import { libraries } from "./libraries/index";
export { libraries };

// Re-export library constants
export * from "./constants";
