import { Library } from "@/types";

/**
 * Java Programming Language Libraries
 * 
 * This file contains a comprehensive collection of Java libraries including:
 * - Standard libraries (java.util, java.io, etc.)
 * - Popular third-party libraries for various domains
 * 
 * To add a new library:
 * 1. Follow the Library interface structure
 * 2. Include accurate version information
 * 3. Provide a detailed description explaining key functions
 * 4. Use consistent tags (see TAG_CATEGORIES in ../constants.ts)
 * 5. Include an official documentation URL
 */

export const javaLibraries: Library[] = [
  {
    name: "java.util",
    version: "Java Standard",
    description: "Core Java package containing the collections framework, legacy collection classes, event model, date and time facilities, internationalization, and miscellaneous utility classes and interfaces.",
    tags: ["Standard Library", "Collections", "Utilities"],
    compatibility: "All Java versions",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/package-summary.html",
  },
  {
    name: "java.io",
    version: "Java Standard",
    description: "Java's core package for system input and output through data streams, serialization and the file system. Provides classes for reading and writing data to files, networks, and other sources.",
    tags: ["Standard Library", "Input/Output", "File Handling"],
    compatibility: "All Java versions",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/io/package-summary.html",
  },
  {
    name: "java.nio",
    version: "Java Standard",
    description: "New input/output APIs that offer features like channel-based I/O, selectors for multiplexed non-blocking I/O, and memory-mapped files for faster I/O operations. Better performance than traditional java.io.",
    tags: ["Standard Library", "Input/Output", "Asynchronous I/O"],
    compatibility: "Java 1.4+",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/package-summary.html",
  },
  {
    name: "java.lang",
    version: "Java Standard",
    description: "Fundamental classes for the Java programming language, including Object, String, Math, and Thread. This package forms the core of the Java language and runtime environment.",
    tags: ["Standard Library", "Core Language", "Fundamentals"],
    compatibility: "All Java versions",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/package-summary.html",
  },
  {
    name: "java.time",
    version: "Java Standard",
    description: "Modern date and time API introduced in Java 8. Provides comprehensive support for date, time, duration, and intervals handling with an immutable, thread-safe design and clear separation of concerns.",
    tags: ["Standard Library", "Date/Time", "Calendar"],
    compatibility: "Java 8+",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/time/package-summary.html",
  },
  {
    name: "java.util.concurrent",
    version: "Java Standard",
    description: "Utility classes for concurrent programming. Includes thread pools, concurrent collections, atomic variables, synchronizers, and other concurrency utilities for building thread-safe applications.",
    tags: ["Standard Library", "Multithreading", "Concurrency"],
    compatibility: "Java 5+",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/concurrent/package-summary.html",
  },
  {
    name: "java.sql",
    version: "Java Standard",
    description: "Java Database Connectivity (JDBC) API for accessing relational databases. Provides classes for database connection, querying, and result handling with standardized interfaces for different database vendors.",
    tags: ["Standard Library", "Database", "Data Access"],
    compatibility: "All Java versions",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.sql/java/sql/package-summary.html",
  },
  {
    name: "java.net",
    version: "Java Standard",
    description: "Network operations package providing classes for implementing networking applications. Contains classes for working with URLs, TCP/IP sockets, and higher-level network protocols.",
    tags: ["Standard Library", "Networking", "Internet Protocols"],
    compatibility: "All Java versions",
    documentationUrl: "https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/net/package-summary.html",
  },
  {
    name: "Spring Framework",
    version: "6.0.6",
    description: "A comprehensive programming and configuration model for modern Java-based enterprise applications. Provides infrastructure support, dependency injection, data access, transaction management, and web development tools.",
    tags: ["Backend", "Web Framework", "Enterprise"],
    compatibility: "Java 17+",
    documentationUrl: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
  },
  {
    name: "Hibernate",
    version: "6.1.7",
    description: "An object-relational mapping tool for Java that maps object models to database tables. Handles database operations, query generation, and transaction management while letting developers work with Java objects.",
    tags: ["Database", "ORM", "Data Storage"],
    compatibility: "Java 11+",
    documentationUrl: "https://hibernate.org/orm/documentation/",
  },
  {
    name: "Apache Tomcat",
    version: "10.1.7",
    description: "An open-source implementation of Jakarta Servlet, Jakarta Server Pages, and related technologies for implementing Java web applications. Acts as a web server and servlet container for Java applications.",
    tags: ["Web Server", "Backend", "Servlet Container"],
    compatibility: "Java 8+",
    documentationUrl: "https://tomcat.apache.org/tomcat-10.1-doc/index.html",
  },
  {
    name: "Jackson",
    version: "2.14.2",
    description: "A suite of data-processing tools for Java, primarily for JSON serialization/deserialization. Can convert Java objects to JSON and back, with support for streaming, tree models, and data binding.",
    tags: ["Data Processing", "JSON", "Serialization"],
    compatibility: "Java 8+",
    documentationUrl: "https://github.com/FasterXML/jackson",
  },
  {
    name: "Guava",
    version: "31.1-jre",
    description: "Google's core Java libraries with enhanced collections, caching, primitives support, concurrency utilities, common annotations, string processing, I/O, and more. Designed to improve Java code quality and readability.",
    tags: ["Core Utilities", "Collections", "Caching"],
    compatibility: "Java 8+",
    documentationUrl: "https://github.com/google/guava/wiki",
  },
  {
    name: "Apache Commons",
    version: "Various",
    description: "A collection of reusable Java components providing a wide range of functionality including IO operations, collections, text processing, configuration, and much more. Simplifies common programming tasks.",
    tags: ["Core Utilities", "Utilities", "Text Processing"],
    compatibility: "Java 8+",
    documentationUrl: "https://commons.apache.org/",
  },
  {
    name: "JUnit",
    version: "5.9.2",
    description: "A popular unit testing framework for Java. Provides annotations for test methods, assertions for validating results, and test runners for executing tests with comprehensive reporting.",
    tags: ["Testing", "Unit Testing", "Development Tools"],
    compatibility: "Java 8+",
    documentationUrl: "https://junit.org/junit5/docs/current/user-guide/",
  },
  {
    name: "Log4j",
    version: "2.20.0",
    description: "A flexible logging framework for Java with support for multiple output targets, custom log levels, and configurable logging patterns. Used for application logging, debugging, and monitoring.",
    tags: ["Logging", "Debugging", "Monitoring"],
    compatibility: "Java 8+",
    documentationUrl: "https://logging.apache.org/log4j/2.x/",
  },
  {
    name: "JavaFX",
    version: "19.0.2",
    description: "A set of graphics and media packages for creating rich client applications with modern UI capabilities. Includes controls, charts, CSS styling, 3D transformations, and multimedia support.",
    tags: ["UI", "GUI Framework", "Desktop"],
    compatibility: "Java 11+",
    documentationUrl: "https://openjfx.io/javadoc/19/",
  },
  {
    name: "Apache Kafka Client",
    version: "3.4.0",
    description: "Java client library for Apache Kafka, a distributed streaming platform. Provides producer and consumer APIs for building real-time data pipelines and streaming applications.",
    tags: ["Messaging", "Streaming", "Distributed Systems"],
    compatibility: "Java 8+",
    documentationUrl: "https://kafka.apache.org/documentation/#api",
  },
  {
    name: "RxJava",
    version: "3.1.6",
    description: "A library for composing asynchronous and event-based programs using observable sequences. Implements the Reactive Extensions (ReactiveX) paradigm for Java with a focus on asynchronous programming.",
    tags: ["Asynchronous", "Reactive Programming", "Event Handling"],
    compatibility: "Java 8+",
    documentationUrl: "https://github.com/ReactiveX/RxJava/wiki",
  },
  {
    name: "Lombok",
    version: "1.18.26",
    description: "A Java library that automatically plugs into your editor and build tools to reduce boilerplate code. Generates getters, setters, constructors, and other common methods during compilation.",
    tags: ["Development Tools", "Code Generation", "Productivity"],
    compatibility: "Java 8+",
    documentationUrl: "https://projectlombok.org/features/all",
  },
  {
    name: "Mockito",
    version: "5.2.0",
    description: "A mocking framework for unit tests in Java. Allows creating and configuring mock objects for simulating the behavior of real objects in a controlled way for testing purposes.",
    tags: ["Testing", "Mocking", "Development Tools"],
    compatibility: "Java 8+",
    documentationUrl: "https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html",
  },
  {
    name: "Netty",
    version: "4.1.90",
    description: "An asynchronous event-driven network application framework for rapid development of maintainable high-performance protocol servers and clients. Used for building high-throughput, low-latency network applications.",
    tags: ["Networking", "Asynchronous I/O", "Performance"],
    compatibility: "Java 8+",
    documentationUrl: "https://netty.io/wiki/user-guide-for-4.x.html",
  },
  {
    name: "Spring Boot",
    version: "3.0.4",
    description: "An extension of the Spring Framework that simplifies the development of production-ready applications. Provides auto-configuration, embedded servers, and opinionated defaults to get applications running quickly.",
    tags: ["Backend", "Web Framework", "Enterprise"],
    compatibility: "Java 17+",
    documentationUrl: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
  },
  {
    name: "Quarkus",
    version: "3.0.0",
    description: "A Kubernetes-native Java framework tailored for GraalVM and HotSpot. Optimized for low memory usage and fast startup times, making it ideal for containers and serverless environments.",
    tags: ["Backend", "Microservices", "Cloud Native"],
    compatibility: "Java 11+",
    documentationUrl: "https://quarkus.io/guides/",
  },
];