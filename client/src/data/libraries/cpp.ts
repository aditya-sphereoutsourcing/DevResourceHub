import { Library } from "@/types";

/**
 * C++ Programming Language Libraries
 * 
 * This file contains a comprehensive collection of C++ libraries including:
 * - Standard libraries (STL containers, algorithms, etc.)
 * - Popular third-party libraries for various domains
 * 
 * To add a new library:
 * 1. Follow the Library interface structure
 * 2. Include accurate version information
 * 3. Provide a detailed description explaining key functions
 * 4. Use consistent tags (see TAG_CATEGORIES in ../constants.ts)
 * 5. Include an official documentation URL
 */

export const cppLibraries: Library[] = [
  {
    name: "<algorithm>",
    version: "C++ Standard",
    description: "Standard C++ library providing a collection of functions for algorithms like sorting, searching, manipulating and performing operations on sequences and ranges. Includes sort(), find(), transform() functions.",
    tags: ["Standard Library", "Algorithms", "Data Processing"],
    compatibility: "C++98 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/algorithm",
  },
  {
    name: "<vector>",
    version: "C++ Standard",
    description: "Standard C++ container representing a dynamic array. Allows dynamic memory allocation, automatic resizing, and comes with iterators for STL algorithm compatibility. Essential for managing collections of objects.",
    tags: ["Standard Library", "Container", "Data Structure"],
    compatibility: "C++98 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/container/vector",
  },
  {
    name: "<iostream>",
    version: "C++ Standard",
    description: "Standard C++ input/output stream library. Provides cin and cout objects for console I/O, file stream operations, and formatting capabilities for text-based input and output.",
    tags: ["Standard Library", "Input/Output", "Streams"],
    compatibility: "C++98 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/io",
  },
  {
    name: "<string>",
    version: "C++ Standard",
    description: "Standard C++ string library providing a string class that offers a safer, more flexible alternative to C-style strings. Features methods for concatenation, searching, replacement, and other string operations.",
    tags: ["Standard Library", "String Manipulation", "Text Processing"],
    compatibility: "C++98 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/string/basic_string",
  },
  {
    name: "<map>",
    version: "C++ Standard",
    description: "Standard C++ container implementing an ordered key-value associative container. Typically implemented as a self-balancing binary search tree for efficient lookup, insertion, and deletion operations.",
    tags: ["Standard Library", "Container", "Data Structure"],
    compatibility: "C++98 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/container/map",
  },
  {
    name: "<thread>",
    version: "C++ Standard",
    description: "Standard C++ multithreading library introduced in C++11. Provides classes and functions for thread management, mutual exclusion, condition variables, and other threading utilities for concurrent programming.",
    tags: ["Standard Library", "Multithreading", "Concurrency"],
    compatibility: "C++11 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/thread",
  },
  {
    name: "<chrono>",
    version: "C++ Standard",
    description: "Standard C++ time library providing facilities for time and duration measurement with high precision. Includes clocks, time points, and duration classes for accurate timing operations.",
    tags: ["Standard Library", "Date/Time", "Measurement"],
    compatibility: "C++11 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/chrono",
  },
  {
    name: "<filesystem>",
    version: "C++ Standard",
    description: "Standard C++ library for filesystem operations added in C++17. Provides classes and functions for working with files, directories, and paths in a portable manner across operating systems.",
    tags: ["Standard Library", "File Handling", "System Programming"],
    compatibility: "C++17 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/filesystem",
  },
  {
    name: "<regex>",
    version: "C++ Standard",
    description: "Standard C++ regular expression library. Provides classes and functions for pattern matching with regular expressions, supporting sophisticated text processing and search operations.",
    tags: ["Standard Library", "Text Processing", "Pattern Matching"],
    compatibility: "C++11 and later",
    documentationUrl: "https://en.cppreference.com/w/cpp/regex",
  },
  {
    name: "Boost",
    version: "1.81.0",
    description: "A set of libraries for C++ providing support for tasks and structures such as multithreading, networking, memory management, and linear algebra. Often considered a testing ground for additions to the C++ Standard Library.",
    tags: ["Core Utilities", "Multithreading", "Networking"],
    compatibility: "C++11, C++14, C++17, C++20",
    documentationUrl: "https://www.boost.org/doc/",
  },
  {
    name: "Qt",
    version: "6.4.2",
    description: "A cross-platform application development framework used for developing GUI applications as well as non-GUI programs. Includes tools for UI design, database access, networking, and more for professional application development.",
    tags: ["UI", "GUI Framework", "Cross-Platform"],
    compatibility: "C++17+",
    documentationUrl: "https://doc.qt.io/",
  },
  {
    name: "OpenCV",
    version: "4.7.0",
    description: "An open-source computer vision and machine learning software library with interfaces for multiple languages. Includes 2500+ algorithms for image processing, object detection, face recognition, and machine learning.",
    tags: ["Computer Vision", "Image Processing", "Machine Learning"],
    compatibility: "C++11+",
    documentationUrl: "https://docs.opencv.org/",
  },
  {
    name: "Poco",
    version: "1.12.4",
    description: "C++ libraries for building network and internet-based applications on desktop, server, mobile, and embedded systems. Provides network protocols, database access, and cryptography components.",
    tags: ["Networking", "Web Development", "Backend"],
    compatibility: "C++14+",
    documentationUrl: "https://pocoproject.org/documentation.html",
  },
  {
    name: "Eigen",
    version: "3.4.0",
    description: "A C++ template library for linear algebra: matrices, vectors, numerical solvers, and related algorithms. Used extensively in scientific computing, robotics, computer vision, and machine learning applications.",
    tags: ["Mathematics", "Linear Algebra", "Scientific Computing"],
    compatibility: "C++11+",
    documentationUrl: "https://eigen.tuxfamily.org/dox/",
  },
  {
    name: "SFML",
    version: "2.5.1",
    description: "Simple and Fast Multimedia Library for graphics, audio, networking, and window management. Designed to provide a simple interface to various system components for game and multimedia application development.",
    tags: ["Game Development", "Graphics", "Multimedia"],
    compatibility: "C++11+",
    documentationUrl: "https://www.sfml-dev.org/documentation/",
  },
  {
    name: "Asio",
    version: "1.24.0",
    description: "A cross-platform C++ library for network and low-level I/O programming. Provides a consistent asynchronous model using a modern C++ approach, with support for sockets, timers, and other I/O services.",
    tags: ["Networking", "Asynchronous I/O", "Performance"],
    compatibility: "C++11+",
    documentationUrl: "https://think-async.com/Asio/",
  },
  {
    name: "EASTL",
    version: "3.19.5",
    description: "Electronic Arts Standard Template Library, a C++ template library optimized for game development needs. Provides alternatives to STL containers and algorithms with a focus on performance, memory usage, and debug visualization.",
    tags: ["Game Development", "Data Structures", "Performance"],
    compatibility: "C++14+",
    documentationUrl: "https://github.com/electronicarts/EASTL",
  },
  {
    name: "JsonCpp",
    version: "1.9.5",
    description: "A C++ library that allows manipulating JSON values, including serialization and deserialization to and from strings. Provides efficient in-memory representation and parsing for working with JSON data.",
    tags: ["JSON", "Data Processing", "Serialization"],
    compatibility: "C++11+",
    documentationUrl: "https://github.com/open-source-parsers/jsoncpp",
  },
  {
    name: "ZeroMQ",
    version: "4.3.4",
    description: "A high-performance asynchronous messaging library for distributed and concurrent applications. Provides a message queue without a dedicated message broker for building distributed systems.",
    tags: ["Networking", "Distributed Systems", "Messaging"],
    compatibility: "C++11+",
    documentationUrl: "https://zeromq.org/",
  },
  {
    name: "fmt",
    version: "9.1.0",
    description: "A modern formatting library providing a fast and safe alternative to C stdio and C++ iostreams. Features type-safe format strings, positional arguments, and custom formatters with a clean, Python-inspired syntax.",
    tags: ["String Manipulation", "Text Processing", "Formatting"],
    compatibility: "C++11+",
    documentationUrl: "https://fmt.dev/latest/index.html",
  },
  {
    name: "spdlog",
    version: "1.11.0",
    description: "A fast C++ logging library featuring asynchronous logging, custom formatting, and various sinks. Designed to be fast, thread-safe, and feature-rich with minimal to no dependencies.",
    tags: ["Logging", "Debugging", "Performance"],
    compatibility: "C++11+",
    documentationUrl: "https://github.com/gabime/spdlog",
  },
  {
    name: "Abseil",
    version: "20230125.1",
    description: "An open-source collection of C++ library code designed to augment the C++ standard library. Created and used by Google, it provides components for features like string formatting, containers, and concurrency tools.",
    tags: ["Core Utilities", "String Manipulation", "Data Structures"],
    compatibility: "C++11+",
    documentationUrl: "https://abseil.io/docs/cpp/",
  },
  {
    name: "Catch2",
    version: "3.3.2",
    description: "A multi-paradigm unit test framework for C++. Features a simple, expressive syntax for writing tests with minimal boilerplate code and a focus on developer productivity and readability.",
    tags: ["Testing", "Unit Testing", "Development Tools"],
    compatibility: "C++11+",
    documentationUrl: "https://github.com/catchorg/Catch2/blob/master/docs/Readme.md",
  },
  {
    name: "TensorFlow C++ API",
    version: "2.11.0",
    description: "C++ interface to TensorFlow, an open-source machine learning framework. Provides high-performance APIs for training and deploying machine learning models in C++ applications.",
    tags: ["Machine Learning", "Artificial Intelligence", "Data Science"],
    compatibility: "C++14+",
    documentationUrl: "https://www.tensorflow.org/api_docs/cc",
  },
  {
    name: "SQLiteCpp",
    version: "3.2.1",
    description: "A smart and easy to use C++ SQLite3 wrapper. Provides a modern, object-oriented interface to the SQLite database with RAII design and custom functions support.",
    tags: ["Database", "SQL", "Data Storage"],
    compatibility: "C++11+",
    documentationUrl: "https://github.com/SRombauts/SQLiteCpp",
  },
];