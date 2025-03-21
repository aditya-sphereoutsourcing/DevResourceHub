
import { Library } from "@/types";

export const rustLibraries: Library[] = [
  {
    name: "tokio",
    version: "1.0+",
    description: "Platform for writing asynchronous I/O backed applications.",
    tags: ["Async", "Runtime", "Networking"],
    compatibility: "Rust 1.45+",
    documentationUrl: "https://docs.rs/tokio",
  },
  {
    name: "serde",
    version: "1.0+",
    description: "Framework for serializing and deserializing Rust data structures.",
    tags: ["Serialization", "JSON", "YAML"],
    compatibility: "Rust 1.13+",
    documentationUrl: "https://docs.rs/serde",
  }
];
