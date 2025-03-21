import { Library } from "@/types";

/**
 * JavaScript Programming Language Libraries
 * 
 * This file contains a comprehensive collection of JavaScript libraries including:
 * - Standard built-in objects and APIs
 * - Popular frontend and backend frameworks and libraries
 * 
 * To add a new library:
 * 1. Follow the Library interface structure
 * 2. Include accurate version information
 * 3. Provide a detailed description explaining key functions
 * 4. Use consistent tags (see TAG_CATEGORIES in ../constants.ts)
 * 5. Include an official documentation URL
 */

export const javascriptLibraries: Library[] = [
  {
    name: "Math",
    version: "ES Standard",
    description: "JavaScript's built-in Math object providing properties and methods for mathematical operations. Includes functions for random number generation, rounding, trigonometry, logarithms, and constants like PI.",
    tags: ["Standard Library", "Mathematics", "Numeric Computation"],
    compatibility: "All JavaScript environments",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",
  },
  {
    name: "Array",
    version: "ES Standard",
    description: "JavaScript's built-in array object with methods for manipulating arrays. Provides functions for adding/removing elements, sorting, filtering, mapping, reducing, and other common array operations.",
    tags: ["Standard Library", "Data Structure", "Collections"],
    compatibility: "All JavaScript environments",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
  },
  {
    name: "Fetch API",
    version: "ES Standard",
    description: "Modern JavaScript API for making HTTP requests. Provides a cleaner, promise-based mechanism for retrieving resources asynchronously across the network, replacing the older XMLHttpRequest.",
    tags: ["Standard Library", "Networking", "HTTP Client"],
    compatibility: "Modern browsers, Node.js with polyfill",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
  },
  {
    name: "Promise",
    version: "ES Standard",
    description: "Built-in JavaScript object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Essential for modern asynchronous programming patterns.",
    tags: ["Standard Library", "Asynchronous", "Core Language"],
    compatibility: "ES6+, IE with polyfill",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  },
  {
    name: "JSON",
    version: "ES Standard",
    description: "Built-in JavaScript object for parsing JSON strings and converting values to JSON. Provides methods for serializing JavaScript objects to JSON strings and parsing JSON strings into JavaScript objects.",
    tags: ["Standard Library", "Data Processing", "Serialization"],
    compatibility: "ES5+, IE8+ with polyfill",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON",
  },
  {
    name: "Map",
    version: "ES Standard",
    description: "Built-in key-value collection where keys can be any data type. Provides better performance for frequent additions/removals and iteration order is preserved, unlike plain objects.",
    tags: ["Standard Library", "Data Structure", "Collections"],
    compatibility: "ES6+, IE with polyfill",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
  },
  {
    name: "Set",
    version: "ES Standard",
    description: "Built-in collection of unique values of any type. Useful for eliminating duplicate values from an array or for keeping track of a set of items where duplicates are not allowed.",
    tags: ["Standard Library", "Data Structure", "Collections"],
    compatibility: "ES6+, IE with polyfill",
    documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
  },
  {
    name: "React",
    version: "18.2.0",
    description: "A JavaScript library for building user interfaces with a component-based architecture. Excels at building single-page applications with a virtual DOM for efficient UI updates and a unidirectional data flow.",
    tags: ["UI", "Frontend", "GUI Framework"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Express.js",
    version: "4.18.2",
    description: "A minimal and flexible Node.js web application framework providing robust features for web and mobile applications. Helps with routing, middleware integration, and HTTP utility methods for APIs and web servers.",
    tags: ["Backend", "Web Framework", "Server"],
    compatibility: "Node.js",
    documentationUrl: "https://expressjs.com/en/4x/api.html",
  },
  {
    name: "Vue.js",
    version: "3.2.47",
    description: "A progressive framework for building user interfaces with an incrementally adoptable architecture. Features a virtual DOM, component-based structure, and reactive data binding with an approachable learning curve.",
    tags: ["UI", "Frontend", "GUI Framework"],
    compatibility: "Browser",
    documentationUrl: "https://vuejs.org/guide/introduction.html",
  },
  {
    name: "Axios",
    version: "1.3.4",
    description: "A promise-based HTTP client for browser and Node.js with an easy-to-use API. Provides features like request/response interception, automatic JSON transformation, and protection against XSRF attacks.",
    tags: ["Networking", "HTTP Client", "Data Transfer"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://axios-http.com/docs/intro",
  },
  {
    name: "jQuery",
    version: "3.6.4",
    description: "A fast, small, and feature-rich JavaScript library that simplifies HTML document traversing, event handling, and animation. Designed to make things like DOM manipulation and AJAX much simpler.",
    tags: ["DOM Manipulation", "Frontend", "Legacy"],
    compatibility: "Browser",
    documentationUrl: "https://api.jquery.com/",
  },
  {
    name: "Lodash",
    version: "4.17.21",
    description: "A modern JavaScript utility library delivering modularity, performance, and extra features. Provides helper functions for arrays, objects, strings, functions, and more for common programming tasks.",
    tags: ["Core Utilities", "Functional Programming", "Data Manipulation"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://lodash.com/docs/",
  },
  {
    name: "Next.js",
    version: "13.2.4",
    description: "A React framework for production that enables features like server-side rendering, static site generation, and API routes. Provides an integrated solution for building React applications with routing and data fetching.",
    tags: ["Frontend", "React", "Server-Side Rendering"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://nextjs.org/docs",
  },
  {
    name: "Angular",
    version: "15.2.2",
    description: "A platform and framework for building single-page client applications with TypeScript/JavaScript. Features a comprehensive solution with integrated libraries for forms, routing, client-server communication, and more.",
    tags: ["UI", "Frontend", "GUI Framework"],
    compatibility: "Browser",
    documentationUrl: "https://angular.io/docs",
  },
  {
    name: "Redux",
    version: "4.2.1",
    description: "A predictable state container for JavaScript apps, often used with React. Helps manage application state with a single global state object and strict rules for state modifications through reducers.",
    tags: ["State Management", "React", "Frontend"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://redux.js.org/introduction/getting-started",
  },
  {
    name: "Mongoose",
    version: "7.0.2",
    description: "An elegant MongoDB object modeling tool for Node.js. Provides schema validation, query building, hooks, and more for working with MongoDB databases in a structured way.",
    tags: ["Database", "MongoDB", "Data Modeling"],
    compatibility: "Node.js",
    documentationUrl: "https://mongoosejs.com/docs/",
  },
  {
    name: "Socket.IO",
    version: "4.6.1",
    description: "A library for real-time web applications enabling bidirectional communication between web clients and servers. Features automatic reconnection, room support, and fallbacks for WebSocket communication.",
    tags: ["Real-time", "Networking", "WebSockets"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://socket.io/docs/v4/",
  },
  {
    name: "Three.js",
    version: "0.150.1",
    description: "A JavaScript 3D library that makes WebGL easy to use. Allows creating animated 3D computer graphics in a web browser without having to learn the complex WebGL API directly.",
    tags: ["3D Graphics", "WebGL", "Visualization"],
    compatibility: "Browser",
    documentationUrl: "https://threejs.org/docs/",
  },
  {
    name: "Jest",
    version: "29.5.0",
    description: "A delightful JavaScript testing framework with a focus on simplicity. Features zero configuration, snapshot testing, built-in code coverage, and mocking capabilities.",
    tags: ["Testing", "Unit Testing", "Development Tools"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://jestjs.io/docs/getting-started",
  },
  {
    name: "Chart.js",
    version: "4.2.1",
    description: "A simple yet flexible JavaScript charting library for designers and developers. Provides 8 chart types (line, bar, radar, doughnut, pie, polar area, bubble, scatter) with responsive design.",
    tags: ["Data Visualization", "Charts", "Frontend"],
    compatibility: "Browser",
    documentationUrl: "https://www.chartjs.org/docs/latest/",
  },
  {
    name: "Moment.js",
    version: "2.29.4",
    description: "A JavaScript date library for parsing, validating, manipulating, and formatting dates. Provides comprehensive tools for working with dates and times in various formats.",
    tags: ["Date/Time", "Formatting", "Utilities"],
    compatibility: "Browser, Node.js",
    documentationUrl: "https://momentjs.com/docs/",
  },
  {
    name: "D3.js",
    version: "7.8.3",
    description: "A JavaScript library for producing dynamic, interactive data visualizations in web browsers. Uses HTML, SVG, and CSS to create powerful data-driven visualizations with smooth transitions and interactions.",
    tags: ["Data Visualization", "Interactive Graphics", "Frontend"],
    compatibility: "Browser",
    documentationUrl: "https://d3js.org/getting-started",
  },
  {
    name: "TypeScript",
    version: "5.0.2",
    description: "A strongly typed programming language that builds on JavaScript by adding static type definitions. Provides optional static typing, classes, and interfaces to JavaScript for better tooling and error detection.",
    tags: ["Language Extension", "Type System", "Development Tools"],
    compatibility: "Browser, Node.js (transpiled)",
    documentationUrl: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Electron",
    version: "23.1.4",
    description: "A framework for building cross-platform desktop applications with JavaScript, HTML, and CSS. Combines Chromium and Node.js into a single runtime to create native-like desktop applications.",
    tags: ["Desktop", "Cross-Platform", "Application Framework"],
    compatibility: "Desktop",
    documentationUrl: "https://www.electronjs.org/docs/latest/",
  },
];