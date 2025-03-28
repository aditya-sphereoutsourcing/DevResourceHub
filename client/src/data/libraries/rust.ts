/**
 * Rust Programming Language Libraries
 * 
 * This file contains a comprehensive collection of Rust libraries including:
 * - Standard libraries (std, core, alloc, etc.)
 * - Popular third-party libraries (crates) for various domains
 * 
 * To add a new library:
 * 1. Follow the Library interface structure
 * 2. Include accurate version information
 * 3. Provide a detailed description explaining key functions
 * 4. Use consistent tags (see TAG_CATEGORIES in ../constants.ts)
 * 5. Include an official documentation URL
 */

import { Library } from "@/types";
import { 
  FUNCTIONAL_CATEGORIES, 
  DOMAIN_CATEGORIES, 
  LIBRARY_TYPE_CATEGORIES,
  FEATURE_CATEGORIES,
  INFRASTRUCTURE_CATEGORIES
} from "../constants";

export const rustLibraries: Library[] = [
  // Standard libraries
  {
    name: "std",
    version: "Standard Library",
    description: "The Rust Standard Library provides the essential runtime functionality for building Rust software. It includes core types like Option and Result, collections, I/O functionality, concurrency primitives, and much more.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[4]],
    compatibility: "All Rust versions",
    documentationUrl: "https://doc.rust-lang.org/std/"
  },
  {
    name: "core",
    version: "Standard Library",
    description: "The Rust Core Library is the dependency-free foundation of the Rust Standard Library. It includes all the types, traits, and functions that are needed to make the language work.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FUNCTIONAL_CATEGORIES[5], INFRASTRUCTURE_CATEGORIES[0]],
    compatibility: "All Rust versions",
    documentationUrl: "https://doc.rust-lang.org/core/"
  },
  {
    name: "alloc",
    version: "Standard Library",
    description: "The Rust Allocation and Collections Library provides types that manage heap-allocated values, including Vec, Box, Rc, Arc, BTreeMap, and more. It's usable in no_std environments with an allocator.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FEATURE_CATEGORIES[4], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "All Rust versions",
    documentationUrl: "https://doc.rust-lang.org/alloc/"
  },
  {
    name: "test",
    version: "Standard Library",
    description: "The Rust Test Library provides utilities for writing tests, benchmarks and examples. It includes functionality for writing unit tests, integration tests, and benchmarks in Rust.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FUNCTIONAL_CATEGORIES[8], INFRASTRUCTURE_CATEGORIES[3]],
    compatibility: "All Rust versions",
    documentationUrl: "https://doc.rust-lang.org/test/"
  },
  {
    name: "proc_macro",
    version: "Standard Library",
    description: "The Rust Procedural Macro Library provides types for implementing custom derive, attribute-like, and function-like procedural macros. It enables compile-time code generation capabilities.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FUNCTIONAL_CATEGORIES[5], INFRASTRUCTURE_CATEGORIES[3]],
    compatibility: "All Rust versions",
    documentationUrl: "https://doc.rust-lang.org/proc_macro/"
  },
  
  // Popular third-party libraries (crates)
  {
    name: "serde",
    version: "1.0.0",
    description: "A framework for serializing and deserializing Rust data structures efficiently and generically. Supports various formats including JSON, YAML, TOML, XML, and more through format-specific backends.",
    tags: [FEATURE_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Rust 1.31+",
    documentationUrl: "https://serde.rs/"
  },
  {
    name: "tokio",
    version: "1.28.0",
    description: "An asynchronous runtime for Rust providing I/O, networking, scheduling, timers, and more. It enables building reliable network applications with minimal overhead across operating systems.",
    tags: [FEATURE_CATEGORIES[8], FEATURE_CATEGORIES[7], FUNCTIONAL_CATEGORIES[1]],
    compatibility: "Rust 1.54+",
    documentationUrl: "https://tokio.rs/"
  },
  {
    name: "actix-web",
    version: "4.3.0",
    description: "A powerful, pragmatic, and extremely fast web framework for Rust. Provides routing, middleware, WebSockets, static files serving, and more. It supports high performance and scalable web services.",
    tags: [FUNCTIONAL_CATEGORIES[9], FEATURE_CATEGORIES[10], DOMAIN_CATEGORIES[5]],
    compatibility: "Rust 1.57+",
    documentationUrl: "https://actix.rs/"
  },
  {
    name: "rocket",
    version: "0.5.0",
    description: "A web framework for Rust that makes it simple to write fast, secure web applications without sacrificing flexibility, usability, or type safety. Features include type-safe routing, guard-based request handling, and form validation.",
    tags: [FUNCTIONAL_CATEGORIES[9], FEATURE_CATEGORIES[10], DOMAIN_CATEGORIES[5]],
    compatibility: "Rust stable 1.61+",
    documentationUrl: "https://rocket.rs/"
  },
  {
    name: "reqwest",
    version: "0.11.18",
    description: "A high-level HTTP client for Rust. Provides an ergonomic API for making HTTP requests, with both blocking and asynchronous versions. Features include cookie handling, proxy support, and automatic gzip decompression.",
    tags: [FUNCTIONAL_CATEGORIES[1], FEATURE_CATEGORIES[9], DOMAIN_CATEGORIES[5]],
    compatibility: "Rust 1.46+",
    documentationUrl: "https://docs.rs/reqwest/"
  },
  {
    name: "axum",
    version: "0.6.18",
    description: "A web application framework built on top of tokio and hyper, focused on ergonomics and modularity. Designed to make it easy to build robust APIs with minimal boilerplate.",
    tags: [FUNCTIONAL_CATEGORIES[9], FEATURE_CATEGORIES[10], DOMAIN_CATEGORIES[5]],
    compatibility: "Rust 1.60+",
    documentationUrl: "https://docs.rs/axum/"
  },
  {
    name: "clap",
    version: "4.3.3",
    description: "A simple-to-use, efficient, and full-featured Command Line Argument Parser for Rust. Supports subcommands, shell completions, help generation, and more.",
    tags: [FEATURE_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "Rust 1.64+",
    documentationUrl: "https://docs.rs/clap/"
  },
  {
    name: "diesel",
    version: "2.1.0",
    description: "A safe, extensible ORM and Query Builder for Rust. Provides compile-time checked queries and type-safe interactions with the database. Supports PostgreSQL, MySQL, and SQLite.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[4], DOMAIN_CATEGORIES[5]],
    compatibility: "Rust 1.65+",
    documentationUrl: "https://diesel.rs/"
  },
  {
    name: "log",
    version: "0.4.19",
    description: "A lightweight logging facade for Rust. Provides macros that map to standard logging APIs and can be configured to send logs to various backends.",
    tags: [FEATURE_CATEGORIES[11], INFRASTRUCTURE_CATEGORIES[1], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Rust 1.31+",
    documentationUrl: "https://docs.rs/log/"
  },
  {
    name: "rand",
    version: "0.8.5",
    description: "A Rust library for random number generation. Provides random number generators, conversion to various distributions, and utilities for generating random values.",
    tags: [FUNCTIONAL_CATEGORIES[4], FEATURE_CATEGORIES[3], DOMAIN_CATEGORIES[0]],
    compatibility: "Rust 1.51+",
    documentationUrl: "https://docs.rs/rand/"
  },
  {
    name: "rayon",
    version: "1.7.0",
    description: "A data-parallelism library for Rust. Provides parallel iterators, enabling simple parallelization of operations like map, filter, and reduce across multiple CPU cores.",
    tags: [FEATURE_CATEGORIES[7], FEATURE_CATEGORIES[6], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Rust 1.59+",
    documentationUrl: "https://docs.rs/rayon/"
  },
  {
    name: "sqlx",
    version: "0.6.3",
    description: "A async, pure Rust SQL crate featuring compile-time checked queries without a DSL. Supports PostgreSQL, MySQL, SQLite, and MSSQL with runtime type checking and macros for compile-time checked queries.",
    tags: [FUNCTIONAL_CATEGORIES[0], FEATURE_CATEGORIES[8], INFRASTRUCTURE_CATEGORIES[4]],
    compatibility: "Rust 1.54+",
    documentationUrl: "https://docs.rs/sqlx/"
  },
  {
    name: "wasm-bindgen",
    version: "0.2.87",
    description: "A library facilitating high-level interactions between Rust and JavaScript when targeting WebAssembly. Allows creating and working with JavaScript objects from Rust and Rust objects from JavaScript.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[6], INFRASTRUCTURE_CATEGORIES[9]],
    compatibility: "Rust 1.54+",
    documentationUrl: "https://rustwasm.github.io/wasm-bindgen/"
  },
  {
    name: "anyhow",
    version: "1.0.71",
    description: "A flexible error handling library for Rust. Provides a trait object-based error type for easy composition and propagation of errors, with good ergonomics for error-related code.",
    tags: [INFRASTRUCTURE_CATEGORIES[0], FEATURE_CATEGORIES[0], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Rust 1.34+",
    documentationUrl: "https://docs.rs/anyhow/"
  },
  {
    name: "thiserror",
    version: "1.0.40",
    description: "A lightweight error handling library for Rust. Provides a derive macro for creating custom error types with minimal boilerplate, designed to work well with the standard library's Error trait.",
    tags: [INFRASTRUCTURE_CATEGORIES[0], FEATURE_CATEGORIES[0], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Rust 1.31+",
    documentationUrl: "https://docs.rs/thiserror/"
  }
];