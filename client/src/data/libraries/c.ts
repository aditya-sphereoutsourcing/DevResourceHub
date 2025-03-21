import { Library } from "@/types";

/**
 * C Programming Language Libraries
 * 
 * This file contains a comprehensive collection of C libraries including:
 * - Standard libraries (math.h, stdio.h, string.h, etc.)
 * - Popular third-party libraries for various domains
 * 
 * To add a new library:
 * 1. Follow the Library interface structure
 * 2. Include accurate version information
 * 3. Provide a detailed description explaining key functions
 * 4. Use consistent tags (see TAG_CATEGORIES in ../constants.ts)
 * 5. Include an official documentation URL
 */

export const cLibraries: Library[] = [
  {
    name: "math.h",
    version: "C Standard",
    description: "Standard C library for mathematical operations. Provides functions for common math operations like trigonometry (sin, cos, tan), logarithms, exponentials, and various numeric calculations.",
    tags: ["Mathematics", "Standard Library", "Numeric Computation"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/numeric/math",
  },
  {
    name: "stdio.h",
    version: "C Standard",
    description: "Standard Input/Output library providing essential I/O functions. Contains printf(), scanf(), file operations (fopen, fread, fwrite), and stream handling for all C programs.",
    tags: ["Standard Library", "Input/Output", "File Handling"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/io",
  },
  {
    name: "string.h",
    version: "C Standard",
    description: "Standard string manipulation library for C. Provides functions for string operations like copying (strcpy), comparison (strcmp), concatenation (strcat), and character array handling.",
    tags: ["Standard Library", "String Manipulation", "Memory Operations"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/string/byte",
  },
  {
    name: "stdlib.h",
    version: "C Standard",
    description: "General purpose standard library providing functions for dynamic memory allocation (malloc, calloc, free), random number generation (rand), sorting (qsort), and other utility functions.",
    tags: ["Standard Library", "Memory Management", "Utilities"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/memory",
  },
  {
    name: "time.h",
    version: "C Standard",
    description: "Standard time manipulation library providing functions for handling dates, times, and time intervals. Includes functions like time(), localtime(), and strftime() for date/time operations.",
    tags: ["Standard Library", "Date/Time", "Calendar"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/chrono",
  },
  {
    name: "ctype.h",
    version: "C Standard",
    description: "Character classification and conversion library. Provides functions to classify characters (isalpha, isdigit) and convert characters between uppercase and lowercase (toupper, tolower).",
    tags: ["Standard Library", "Character Classification", "Text Processing"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/string/byte",
  },
  {
    name: "assert.h",
    version: "C Standard",
    description: "Diagnostic library providing a way to verify program assumptions during development. The assert() macro helps detect logical errors and other bugs by testing expression truth at runtime.",
    tags: ["Standard Library", "Debugging", "Error Handling"],
    compatibility: "All C Standards",
    documentationUrl: "https://en.cppreference.com/w/c/error",
  },
  {
    name: "libcurl",
    version: "7.87.0",
    description: "A client-side URL transfer library supporting numerous protocols including HTTP, HTTPS, FTP, and more. Used for creating web clients, API connections, and file transfers over networks.",
    tags: ["Networking", "HTTP Client", "Data Transfer"],
    compatibility: "C99+",
    documentationUrl: "https://curl.se/libcurl/",
  },
  {
    name: "SQLite",
    version: "3.40.1",
    description: "A C-language library that implements a small, fast, self-contained, high-reliability, SQL database engine. Perfect for embedded applications, mobile apps, and small to medium databases.",
    tags: ["Database", "Data Storage", "SQL"],
    compatibility: "ANSI-C",
    documentationUrl: "https://www.sqlite.org/docs.html",
  },
  {
    name: "GTK",
    version: "4.8.3",
    description: "A free and open-source cross-platform widget toolkit for creating graphical user interfaces (GUIs). Used for creating desktop applications with rich user interfaces on Linux, Windows, and macOS.",
    tags: ["UI", "GUI Framework", "Desktop"],
    compatibility: "C11+",
    documentationUrl: "https://www.gtk.org/docs/",
  },
  {
    name: "OpenSSL",
    version: "3.0.7",
    description: "A robust, commercial-grade, toolkit for Transport Layer Security (TLS) protocols. Provides cryptographic functions for secure communications, certificate management, and data encryption.",
    tags: ["Security", "Cryptography", "Networking"],
    compatibility: "ANSI-C",
    documentationUrl: "https://www.openssl.org/docs/",
  },
  {
    name: "OpenGL",
    version: "4.6",
    description: "A cross-language, cross-platform API for rendering 2D and 3D vector graphics. Used extensively in game development, CAD applications, virtual reality, and scientific visualization.",
    tags: ["Graphics", "Rendering", "Game Development"],
    compatibility: "C99+",
    documentationUrl: "https://www.opengl.org/documentation/",
  },
  {
    name: "SDL",
    version: "2.26.2",
    description: "Simple DirectMedia Layer is a cross-platform development library designed to provide low-level access to audio, keyboard, mouse, joystick, and graphics hardware. Used widely in game development.",
    tags: ["Game Development", "Graphics", "Audio"],
    compatibility: "ANSI-C",
    documentationUrl: "https://wiki.libsdl.org/",
  },
  {
    name: "libevent",
    version: "2.1.12",
    description: "An event notification library for developing scalable network servers. Provides a mechanism to execute callbacks when specific events occur on file descriptors or after a timeout.",
    tags: ["Networking", "Event Handling", "Asynchronous I/O"],
    compatibility: "POSIX systems",
    documentationUrl: "https://libevent.org/",
  },
  {
    name: "jansson",
    version: "2.14",
    description: "C library for encoding, decoding, and manipulating JSON data. Features easy-to-use API, UTF-8 support, and comprehensive error handling for working with JSON in C applications.",
    tags: ["JSON", "Data Processing", "Serialization"],
    compatibility: "C99+",
    documentationUrl: "https://jansson.readthedocs.io/",
  },
  {
    name: "zlib",
    version: "1.2.13",
    description: "A massively used compression library implementing the DEFLATE algorithm, used in gzip and PNG. Provides functions for in-memory and file-based compression and decompression.",
    tags: ["Compression", "Data Processing", "File Handling"],
    compatibility: "ANSI-C",
    documentationUrl: "https://zlib.net/manual.html",
  },
  {
    name: "libxml2",
    version: "2.10.3",
    description: "A XML C parser and toolkit developed for the Gnome project. Provides complete support for the XML standard with DOM, SAX and XPath interfaces for XML document processing.",
    tags: ["XML", "Data Processing", "Parsing"],
    compatibility: "C99+",
    documentationUrl: "https://gitlab.gnome.org/GNOME/libxml2/-/wikis/Home",
  },
  {
    name: "FFmpeg",
    version: "5.1.2",
    description: "A complete, cross-platform solution to record, convert and stream audio and video. Industry standard for multimedia processing with comprehensive codec support.",
    tags: ["Multimedia", "Audio/Video", "Encoding"],
    compatibility: "C99+",
    documentationUrl: "https://ffmpeg.org/documentation.html",
  },
  {
    name: "Lua",
    version: "5.4.4",
    description: "A powerful, efficient, lightweight, embeddable scripting language. This library allows C programs to integrate and extend with the Lua scripting language for configuration and extensibility.",
    tags: ["Scripting", "Embedded", "Language Integration"],
    compatibility: "ANSI-C",
    documentationUrl: "https://www.lua.org/docs.html",
  },
  {
    name: "ncurses",
    version: "6.4",
    description: "A programming library providing an API for writing text-based user interfaces in a terminal-independent manner. Used for creating text-based UIs, terminal games, and menu systems.",
    tags: ["TUI", "Terminal", "User Interface"],
    compatibility: "POSIX systems",
    documentationUrl: "https://invisible-island.net/ncurses/announce.html",
  },
  {
    name: "libpng",
    version: "1.6.39",
    description: "The official PNG reference library for reading and writing PNG (Portable Network Graphics) files. Provides complete functionality for lossless image compression and handling.",
    tags: ["Graphics", "Image Processing", "Compression"],
    compatibility: "ANSI-C",
    documentationUrl: "http://www.libpng.org/pub/png/libpng.html",
  },
  {
    name: "libjpeg",
    version: "9e",
    description: "The Independent JPEG Group's library for reading, writing, and manipulating JPEG image files. Implements a widely-used standard for lossy image compression.",
    tags: ["Graphics", "Image Processing", "Compression"],
    compatibility: "ANSI-C",
    documentationUrl: "https://ijg.org/",
  },
  {
    name: "pthread",
    version: "POSIX Standard",
    description: "POSIX Threads library implementing the threading API for creating and managing threads in C programs. Essential for multi-threaded applications with shared memory parallelism.",
    tags: ["Multithreading", "Concurrency", "System Programming"],
    compatibility: "POSIX systems",
    documentationUrl: "https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/pthread.h.html",
  },
  {
    name: "OpenMP",
    version: "5.2",
    description: "An API that supports multi-platform shared-memory parallel programming in C. Provides a simple and flexible interface for developing parallel applications on multiprocessor architectures.",
    tags: ["Parallel Programming", "Multithreading", "Performance"],
    compatibility: "Most C compilers",
    documentationUrl: "https://www.openmp.org/specifications/",
  },
  {
    name: "libssh",
    version: "0.10.4",
    description: "A multiplatform C library implementing the SSHv2 protocol. Provides full SSH client and server capabilities for secure remote access and file transfer applications.",
    tags: ["Networking", "Security", "Remote Access"],
    compatibility: "POSIX, Windows",
    documentationUrl: "https://www.libssh.org/documentation/",
  },
];