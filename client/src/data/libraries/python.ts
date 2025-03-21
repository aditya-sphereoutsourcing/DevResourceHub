/**
 * Python Programming Language Libraries
 * 
 * This file contains a comprehensive collection of Python libraries including:
 * - Standard libraries (os, sys, math, etc.)
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
import { FUNCTIONAL_CATEGORIES, DOMAIN_CATEGORIES, LIBRARY_TYPE_CATEGORIES } from "../constants";

export const pythonLibraries: Library[] = [
  // Standard libraries
  {
    name: "os",
    version: "Standard Library",
    description: "Provides a portable way of interacting with the operating system. Includes functions for file operations, environment variables, processes, and more.",
    tags: [FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[9], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/os.html"
  },
  {
    name: "sys",
    version: "Standard Library",
    description: "Provides access to some variables used or maintained by the Python interpreter and to functions that interact with the interpreter. Useful for command-line arguments, standard I/O streams, and interpreter settings.",
    tags: [FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[9], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/sys.html"
  },
  {
    name: "math",
    version: "Standard Library",
    description: "Provides mathematical functions for complex calculations. Includes trigonometric functions, logarithms, rounding, and mathematical constants like pi and e.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/math.html"
  },
  {
    name: "random",
    version: "Standard Library",
    description: "Implements pseudorandom number generators for various distributions. Useful for generating random numbers, selecting random elements, shuffling sequences, and more.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/random.html"
  },
  {
    name: "datetime",
    version: "Standard Library",
    description: "Supplies classes for manipulating dates and times. Provides objects for date, time, datetime, timedelta, and timezone manipulation.",
    tags: [FUNCTIONAL_CATEGORIES[2], DOMAIN_CATEGORIES[9], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/datetime.html"
  },
  
  // Popular third-party libraries
  {
    name: "NumPy",
    version: "1.24.0",
    description: "Fundamental package for scientific computing with Python. Provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[4], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.5+",
    documentationUrl: "https://numpy.org/doc/"
  },
  {
    name: "pandas",
    version: "2.0.0",
    description: "Powerful data manipulation and analysis library. Offers data structures for efficiently storing and manipulating large datasets, including DataFrame and Series objects.",
    tags: [FUNCTIONAL_CATEGORIES[0], DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[4]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://pandas.pydata.org/docs/"
  },
  {
    name: "matplotlib",
    version: "3.7.0",
    description: "Comprehensive library for creating static, animated, and interactive visualizations in Python. Provides a MATLAB-like interface for generating plots, histograms, bar charts, and more.",
    tags: [FUNCTIONAL_CATEGORIES[11], DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[4]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://matplotlib.org/stable/contents.html"
  },
  {
    name: "scikit-learn",
    version: "1.2.0",
    description: "Machine learning library that provides simple and efficient tools for data mining and data analysis. Includes algorithms for classification, regression, clustering, and dimensionality reduction.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://scikit-learn.org/stable/documentation.html"
  },
  {
    name: "TensorFlow",
    version: "2.13.0",
    description: "End-to-end open source platform for machine learning. Provides a comprehensive, flexible ecosystem of tools and libraries for building and deploying ML models.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://www.tensorflow.org/api_docs"
  },
  {
    name: "PyTorch",
    version: "2.0.0",
    description: "Machine learning framework that accelerates the path from research to production. Provides a seamless path from research prototyping to production deployment with GPU acceleration.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://pytorch.org/docs/stable/index.html"
  },
  {
    name: "Django",
    version: "4.2.0",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design. Follows the Model-View-Template (MVT) architectural pattern.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://docs.djangoproject.com/en/stable/"
  },
  {
    name: "Flask",
    version: "2.3.0",
    description: "Lightweight WSGI web application framework designed to make getting started quick and easy. Provides the essentials for web development without imposing project structure.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://flask.palletsprojects.com/"
  },
  {
    name: "FastAPI",
    version: "0.95.0",
    description: "Modern, fast web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use and high performance with automatic Swagger/OpenAPI documentation.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://fastapi.tiangolo.com/"
  },
  {
    name: "Requests",
    version: "2.29.0",
    description: "Elegant and simple HTTP library for Python. Allows you to send HTTP/1.1 requests extremely easily, with support for cookies, sessions, JSON, and more.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://requests.readthedocs.io/en/latest/"
  }
];