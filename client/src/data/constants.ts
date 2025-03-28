/**
 * DevLibGuide Tag Constants
 * 
 * This file defines standardized tags used across all programming languages
 * to ensure consistent categorization of libraries.
 * 
 * When adding a new library, please select appropriate tags from these categories
 * to maintain consistent filtering and searchability.
 */

// Main functional categories
export const FUNCTIONAL_CATEGORIES = [
  "Database",
  "Networking",
  "UI",
  "GUI Framework",
  "Mathematics",
  "Data Processing",
  "Graphics",
  "Security",
  "Testing",
  "Web Development",
  "Game Development",
  "Machine Learning",
  "Multimedia"
] as const;

// Specific features or characteristics
export const FEATURE_CATEGORIES = [
  "Input/Output",
  "File Handling",
  "String Manipulation",
  "Algorithms",
  "Data Structure",
  "Serialization",
  "Multithreading",
  "Concurrency",
  "Asynchronous I/O",
  "HTTP Client",
  "Web Server",
  "Logging",
  "Configuration",
  "XML",
  "JSON",
  "Performance"
] as const;

// Library type categories
export const LIBRARY_TYPE_CATEGORIES = [
  "Standard Library",
  "Core Utilities",
  "Framework",
  "Toolkit",
  "API Wrapper",
  "SDK"
] as const;

// Specialized domain categories 
export const DOMAIN_CATEGORIES = [
  "Scientific Computing",
  "Computer Vision",
  "Natural Language Processing",
  "Image Processing",
  "Audio Processing",
  "Backend",
  "Frontend",
  "Desktop",
  "Mobile",
  "Embedded",
  "Cloud Native",
  "Distributed Systems",
  "Enterprise",
  "Microservices"
] as const;

// Infrastructure categories
export const INFRASTRUCTURE_CATEGORIES = [
  "Error Handling",
  "Monitoring",
  "Debugging",
  "Development Tools",
  "ORM",
  "Data Storage",
  "Caching",
  "Messaging",
  "Container",
  "Cross-Platform"
] as const;

// All tag categories combined
export const ALL_TAG_CATEGORIES = [
  ...FUNCTIONAL_CATEGORIES,
  ...FEATURE_CATEGORIES,
  ...LIBRARY_TYPE_CATEGORIES,
  ...DOMAIN_CATEGORIES,
  ...INFRASTRUCTURE_CATEGORIES
] as const;

// Tag type for TypeScript
export type LibraryTag = typeof ALL_TAG_CATEGORIES[number];

/**
 * LANGUAGE CONSTANTS
 * Definitions of supported programming languages
 */
export const SUPPORTED_LANGUAGES = [
  "C",
  "C++", 
  "Java",
  "JavaScript",
  "Python",
  "Rust",
  "Swift"
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];