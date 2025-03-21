
import { Library } from "@/types";

export const swiftLibraries: Library[] = [
  {
    name: "SwiftUI",
    version: "Swift 5.0+",
    description: "Framework for building user interfaces across Apple platforms using Swift declarative syntax.",
    tags: ["UI", "Apple", "iOS", "macOS"],
    compatibility: "iOS 13.0+, macOS 10.15+",
    documentationUrl: "https://developer.apple.com/documentation/swiftui",
  },
  {
    name: "Combine",
    version: "Swift 5.0+",
    description: "Framework for processing values over time, combining multiple publishers into a single subscription.",
    tags: ["Reactive", "Events", "Data Processing"],
    compatibility: "iOS 13.0+, macOS 10.15+",
    documentationUrl: "https://developer.apple.com/documentation/combine",
  }
];
