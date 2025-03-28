/**
 * Swift Programming Language Libraries
 * 
 * This file contains a comprehensive collection of Swift libraries including:
 * - Standard libraries (Foundation, UIKit, SwiftUI, etc.)
 * - Popular third-party libraries for various domains
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

export const swiftLibraries: Library[] = [
  // Standard libraries and frameworks
  {
    name: "Swift Standard Library",
    version: "5.8",
    description: "The Swift Standard Library provides core types like String, Array, and Dictionary, along with algorithms, protocols for common patterns, and value types for common data. It forms the foundation of Swift programming.",
    tags: [LIBRARY_TYPE_CATEGORIES[0], FEATURE_CATEGORIES[4], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Swift 5.0+",
    documentationUrl: "https://developer.apple.com/documentation/swift/swift_standard_library"
  },
  {
    name: "Foundation",
    version: "Apple Framework",
    description: "A framework that provides a base layer of functionality for apps and frameworks, including data storage and persistence, text processing, date and time calculations, sorting and filtering, and networking.",
    tags: [LIBRARY_TYPE_CATEGORIES[1], FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[0]],
    compatibility: "iOS 2.0+, macOS 10.0+",
    documentationUrl: "https://developer.apple.com/documentation/foundation"
  },
  {
    name: "UIKit",
    version: "Apple Framework",
    description: "A framework providing required infrastructure for iOS, iPadOS, and tvOS apps. It provides window and view architecture, event handling, touch and motion input, and the interface to display graphics and text.",
    tags: [FUNCTIONAL_CATEGORIES[2], DOMAIN_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 2.0+, tvOS 9.0+",
    documentationUrl: "https://developer.apple.com/documentation/uikit"
  },
  {
    name: "SwiftUI",
    version: "Apple Framework",
    description: "A modern way to declare user interfaces for any Apple platform. It provides views, controls, and layout structures for declaring your app's user interface, with a simple, declarative syntax.",
    tags: [FUNCTIONAL_CATEGORIES[2], DOMAIN_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 13.0+, macOS 10.15+, tvOS 13.0+, watchOS 6.0+",
    documentationUrl: "https://developer.apple.com/documentation/swiftui"
  },
  {
    name: "Combine",
    version: "Apple Framework",
    description: "A framework providing a declarative Swift API for processing values over time. It allows developers to uniformly process different types of asynchronous events with a single API.",
    tags: [FEATURE_CATEGORIES[8], FUNCTIONAL_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 13.0+, macOS 10.15+, tvOS 13.0+, watchOS 6.0+",
    documentationUrl: "https://developer.apple.com/documentation/combine"
  },
  {
    name: "Core Data",
    version: "Apple Framework",
    description: "A framework for managing the model layer objects in an application. It provides generalized and automated solutions to common tasks associated with object life-cycle and object graph management.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 3.0+, macOS 10.4+",
    documentationUrl: "https://developer.apple.com/documentation/coredata"
  },
  {
    name: "Core Graphics",
    version: "Apple Framework",
    description: "A framework for handling 2D rendering based on the Quartz advanced drawing engine. It provides low-level, lightweight 2D rendering with unmatched output fidelity.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 2.0+, macOS 10.2+",
    documentationUrl: "https://developer.apple.com/documentation/coregraphics"
  },
  {
    name: "Core Animation",
    version: "Apple Framework",
    description: "A graphics rendering and animation infrastructure that provides fluid animations and visual effects. It's designed to be as user-friendly and high-performance as possible.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 2.0+, macOS 10.5+",
    documentationUrl: "https://developer.apple.com/documentation/quartzcore"
  },
  {
    name: "Core Location",
    version: "Apple Framework",
    description: "A framework providing location and heading information to apps. It reports the device's geographic location and altitude, and uses the available hardware to provide heading information.",
    tags: [FUNCTIONAL_CATEGORIES[1], DOMAIN_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 2.0+, macOS 10.6+",
    documentationUrl: "https://developer.apple.com/documentation/corelocation"
  },
  {
    name: "AVFoundation",
    version: "Apple Framework",
    description: "A framework for working with audiovisual media in iOS, macOS, tvOS, and watchOS apps. It provides an object-oriented interface for capturing, processing, controlling, and manipulating media.",
    tags: [FUNCTIONAL_CATEGORIES[12], DOMAIN_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 2.2+, macOS 10.7+",
    documentationUrl: "https://developer.apple.com/documentation/avfoundation"
  },
  
  // Popular third-party libraries
  {
    name: "Alamofire",
    version: "5.7.0",
    description: "An elegant networking library for Swift. It provides a simple and clean API for making HTTP requests, with features like parameter encoding, response validation, authentication, and more.",
    tags: [FUNCTIONAL_CATEGORIES[1], FEATURE_CATEGORIES[9], DOMAIN_CATEGORIES[5]],
    compatibility: "iOS 10.0+, macOS 10.12+, tvOS 10.0+, watchOS 3.0+",
    documentationUrl: "https://github.com/Alamofire/Alamofire"
  },
  {
    name: "SwiftyJSON",
    version: "5.0.1",
    description: "A lightweight JSON parsing library that makes it easier to deal with JSON data in Swift. It provides a more readable and type-safe way to access JSON data compared to standard Swift JSON handling.",
    tags: [FEATURE_CATEGORIES[14], FUNCTIONAL_CATEGORIES[5], DOMAIN_CATEGORIES[5]],
    compatibility: "iOS 8.0+, macOS 10.10+, tvOS 9.0+, watchOS 2.0+",
    documentationUrl: "https://github.com/SwiftyJSON/SwiftyJSON"
  },
  {
    name: "SnapKit",
    version: "5.6.0",
    description: "A Swift Autolayout DSL for iOS and macOS. It provides a fluent, chainable interface for creating constraints programmatically, making layout code more concise and readable.",
    tags: [FUNCTIONAL_CATEGORIES[2], DOMAIN_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "iOS 10.0+, macOS 10.12+, tvOS 10.0+",
    documentationUrl: "https://github.com/SnapKit/SnapKit"
  },
  {
    name: "Kingfisher",
    version: "7.6.1",
    description: "A powerful, pure-Swift library for downloading and caching images from the web. It provides an elegant way to download and cache remote images, with features like memory and disk caching, cancel-able downloads, and more.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[3], FEATURE_CATEGORIES[9]],
    compatibility: "iOS 12.0+, macOS 10.14+, tvOS 12.0+, watchOS 5.0+",
    documentationUrl: "https://github.com/onevcat/Kingfisher"
  },
  {
    name: "RxSwift",
    version: "6.5.0",
    description: "Reactive Programming in Swift. It allows for reactive functional programming by handling asynchronous events as observable sequences and provides a declarative way to define computation behavior.",
    tags: [FEATURE_CATEGORIES[8], FUNCTIONAL_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 9.0+, macOS 10.9+, tvOS 9.0+, watchOS 3.0+",
    documentationUrl: "https://github.com/ReactiveX/RxSwift"
  },
  {
    name: "CocoaLumberjack",
    version: "3.8.0",
    description: "A fast & simple, yet powerful & flexible logging framework for macOS, iOS, tvOS and watchOS. Supports multiple log levels, log filtering, log formatting, and more.",
    tags: [FEATURE_CATEGORIES[11], INFRASTRUCTURE_CATEGORIES[1], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 9.0+, macOS 10.9+, tvOS 9.0+, watchOS 3.0+",
    documentationUrl: "https://github.com/CocoaLumberjack/CocoaLumberjack"
  },
  {
    name: "Realm",
    version: "10.39.1",
    description: "A mobile database that runs directly on phones, tablets or wearables. It's a faster alternative to SQLite and Core Data, with features like zero-copy architecture, real-time notifications, and more.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "iOS 11.0+, macOS 10.13+, tvOS 11.0+, watchOS 4.0+",
    documentationUrl: "https://github.com/realm/realm-swift"
  },
  {
    name: "Charts",
    version: "4.1.0",
    description: "A powerful chart/graph framework for iOS, tvOS and macOS. Provides 8 different chart types with interactive features like zooming, panning, and animations.",
    tags: [FUNCTIONAL_CATEGORIES[11], DOMAIN_CATEGORIES[0], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "iOS 12.0+, macOS 10.13+, tvOS 12.0+",
    documentationUrl: "https://github.com/danielgindi/Charts"
  },
  {
    name: "Moya",
    version: "15.0.0",
    description: "A network abstraction layer built on top of Alamofire. It provides a more declarative way to define network requests, with type-safe access to response data and built-in testing capabilities.",
    tags: [FUNCTIONAL_CATEGORIES[1], FEATURE_CATEGORIES[9], DOMAIN_CATEGORIES[5]],
    compatibility: "iOS 10.0+, macOS 10.12+, tvOS 10.0+, watchOS 3.0+",
    documentationUrl: "https://github.com/Moya/Moya"
  },
  {
    name: "Lottie",
    version: "4.2.0",
    description: "A library that natively renders After Effects vector animations. It allows for high-quality animations without the performance hit of traditional animation formats.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "iOS 11.0+, macOS 10.12+, tvOS 11.0+",
    documentationUrl: "https://github.com/airbnb/lottie-ios"
  }
];