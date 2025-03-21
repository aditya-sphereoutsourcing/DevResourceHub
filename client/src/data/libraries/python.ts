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

export const pythonLibraries: Library[] = [
  // Standard Library
  {
    name: "os",
    version: "Python Standard Library",
    description: "Provides a portable way of using operating system dependent functionality like reading or writing to the file system, manipulating paths, process management, and accessing environment variables.",
    tags: ["Standard Library", "File Handling", "Operating System", "Core Utilities"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/os.html"
  },
  {
    name: "sys",
    version: "Python Standard Library",
    description: "Provides access to some variables used or maintained by the Python interpreter and to functions that interact strongly with the interpreter, such as command line arguments, standard input/output, and the module search path.",
    tags: ["Standard Library", "Core Utilities", "Input/Output"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/sys.html"
  },
  {
    name: "math",
    version: "Python Standard Library",
    description: "Provides access to the mathematical functions defined by the C standard. These functions cannot be used with complex numbers; for those, use the functions in the cmath module.",
    tags: ["Standard Library", "Mathematics", "Scientific Computing"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/math.html"
  },
  {
    name: "datetime",
    version: "Python Standard Library",
    description: "Supplies classes for manipulating dates and times in both simple and complex ways. While date and time arithmetic is supported, the focus of the implementation is on efficient attribute extraction for output formatting and manipulation.",
    tags: ["Standard Library", "Date and Time", "Core Utilities"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/datetime.html"
  },
  {
    name: "collections",
    version: "Python Standard Library",
    description: "Implements specialized container datatypes providing alternatives to Python's general purpose built-in containers (dict, list, set, and tuple). Includes namedtuple, deque, Counter, OrderedDict, and defaultdict.",
    tags: ["Standard Library", "Data Structure", "Core Utilities"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/collections.html"
  },
  {
    name: "json",
    version: "Python Standard Library",
    description: "Provides an API for converting in-memory Python objects to a serialized representation known as JavaScript Object Notation (JSON) and vice versa.",
    tags: ["Standard Library", "JSON", "Serialization", "Data Processing"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/json.html"
  },
  {
    name: "re",
    version: "Python Standard Library",
    description: "Provides regular expression matching operations. Both patterns and strings to be searched can be Unicode strings as well as 8-bit strings.",
    tags: ["Standard Library", "String Manipulation", "Core Utilities"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/re.html"
  },
  {
    name: "random",
    version: "Python Standard Library",
    description: "Implements pseudo-random number generators for various distributions, including integer, sequence selection, and floating point.",
    tags: ["Standard Library", "Mathematics", "Core Utilities"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/random.html"
  },
  {
    name: "sqlite3",
    version: "Python Standard Library",
    description: "Provides a SQL interface compliant with the DB-API 2.0 specification for SQLite databases. SQLite is a C library that provides a lightweight disk-based database that doesn't require a separate server process.",
    tags: ["Standard Library", "Database", "Data Storage", "SQL"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/sqlite3.html"
  },
  {
    name: "argparse",
    version: "Python Standard Library",
    description: "Makes it easy to write user-friendly command-line interfaces. The program defines what arguments it requires, and argparse will figure out how to parse those out of sys.argv.",
    tags: ["Standard Library", "Command Line", "Core Utilities", "Input/Output"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/argparse.html"
  },
  {
    name: "logging",
    version: "Python Standard Library",
    description: "Provides a flexible framework for emitting log messages from Python programs. It is a standard module included in the Python standard library.",
    tags: ["Standard Library", "Logging", "Debugging", "Error Handling"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/logging.html"
  },
  {
    name: "threading",
    version: "Python Standard Library",
    description: "Constructs higher-level threading interfaces on top of the lower level _thread module. It offers classes for managing threads, semaphores, events, conditions, and other synchronization primitives.",
    tags: ["Standard Library", "Multithreading", "Concurrency"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/threading.html"
  },
  {
    name: "multiprocessing",
    version: "Python Standard Library",
    description: "Offers both local and remote concurrency, effectively side-stepping the Global Interpreter Lock by using subprocesses instead of threads. Allows for parallel execution of code on multiple processors.",
    tags: ["Standard Library", "Concurrency", "Multithreading", "Performance"],
    compatibility: "Python 2.6+, 3.x",
    documentationUrl: "https://docs.python.org/3/library/multiprocessing.html"
  },
  {
    name: "asyncio",
    version: "Python Standard Library",
    description: "Provides infrastructure for writing single-threaded concurrent code using coroutines, multiplexing I/O access over sockets and other resources, running network clients and servers, and other related primitives.",
    tags: ["Standard Library", "Asynchronous I/O", "Concurrency", "Networking"],
    compatibility: "Python 3.4+",
    documentationUrl: "https://docs.python.org/3/library/asyncio.html"
  },
  {
    name: "unittest",
    version: "Python Standard Library",
    description: "Supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of tests from the reporting framework.",
    tags: ["Standard Library", "Testing", "Development Tools"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/unittest.html"
  },
  {
    name: "csv",
    version: "Python Standard Library",
    description: "Implements classes to read and write tabular data in CSV format. It allows programmers to say, 'write this data in the format preferred by Excel,' or 'read data from this file which was generated by Excel.'",
    tags: ["Standard Library", "Data Processing", "File Handling"],
    compatibility: "Python 2.x, 3.x",
    documentationUrl: "https://docs.python.org/3/library/csv.html"
  },
  
  // Web Development
  {
    name: "Flask",
    version: "2.3.3 (2023)",
    description: "A lightweight WSGI web application framework designed to make getting started quick and easy, with the ability to scale up to complex applications. Flask offers suggestions, but doesn't enforce dependencies or project layout.",
    tags: ["Web Framework", "Backend", "Microservices", "Web Development"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://flask.palletsprojects.com/"
  },
  {
    name: "Django",
    version: "4.2.6 (2023)",
    description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app.",
    tags: ["Web Framework", "ORM", "Backend", "Full Stack", "Enterprise"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://www.djangoproject.com/"
  },
  {
    name: "FastAPI",
    version: "0.104.0 (2023)",
    description: "A modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It's designed to be easy to use and learn while being robust enough for production.",
    tags: ["Web Framework", "Backend", "API", "Asynchronous I/O", "Performance"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://fastapi.tiangolo.com/"
  },
  {
    name: "Pyramid",
    version: "2.0.2 (2023)",
    description: "A general, open source, web application development framework built in Python. It allows developers to create web applications with a minimal amount of code. Includes features for URL mapping, templating, security, and more.",
    tags: ["Web Framework", "Backend", "Enterprise"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://trypyramid.com/"
  },
  {
    name: "Tornado",
    version: "6.3.3 (2023)",
    description: "A Python web framework and asynchronous networking library, designed for high performance and non-blocking I/O. It's particularly well-suited for long polling, WebSockets, and other applications that require a long-lived connection.",
    tags: ["Web Framework", "Asynchronous I/O", "Networking", "WebSockets"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://www.tornadoweb.org/"
  },
  {
    name: "Requests",
    version: "2.31.0 (2023)",
    description: "An elegant and simple HTTP library for Python, built for human beings. It allows you to send HTTP/1.1 requests extremely easily, with minimal code. It supports various authentication mechanisms and handles cookies, redirects, and more.",
    tags: ["HTTP Client", "Networking", "API Wrapper"],
    compatibility: "Python 2.7, 3.6+",
    documentationUrl: "https://docs.python-requests.org/"
  },
  {
    name: "aiohttp",
    version: "3.8.6 (2023)",
    description: "Asynchronous HTTP client/server framework for asyncio and Python. It provides a client and server implementation, supports both client WebSockets and server WebSockets, and is ideal for high concurrency applications.",
    tags: ["HTTP Client", "Web Server", "Asynchronous I/O", "WebSockets"],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.aiohttp.org/"
  },
  {
    name: "Jinja2",
    version: "3.1.2 (2023)",
    description: "A modern and designer-friendly templating language for Python, modeled after Django's templates. It's fast, widely used and secure with the optional sandboxed template execution environment.",
    tags: ["Templating", "Web Development", "Frontend"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://jinja.palletsprojects.com/"
  },

  // Data Science and Machine Learning
  {
    name: "NumPy",
    version: "1.26.1 (2023)",
    description: "The fundamental package for scientific computing with Python. It provides a multidimensional array object, various derived objects, and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, and basic statistical operations.",
    tags: ["Mathematics", "Scientific Computing", "Data Processing", "Performance"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://numpy.org/doc/"
  },
  {
    name: "pandas",
    version: "2.1.1 (2023)",
    description: "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of NumPy. It offers data structures and operations for manipulating numerical tables and time series.",
    tags: ["Data Processing", "Data Analysis", "Data Structure", "Scientific Computing"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://pandas.pydata.org/"
  },
  {
    name: "Matplotlib",
    version: "3.8.0 (2023)",
    description: "A comprehensive library for creating static, animated, and interactive visualizations in Python. It provides an object-oriented API for embedding plots into applications using general-purpose GUI toolkits.",
    tags: ["Visualization", "Graphics", "Data Analysis", "Scientific Computing"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://matplotlib.org/"
  },
  {
    name: "SciPy",
    version: "1.11.3 (2023)",
    description: "Open-source software for mathematics, science, and engineering. It includes modules for statistics, optimization, integration, linear algebra, Fourier transforms, signal and image processing, ODE solvers, and more.",
    tags: ["Scientific Computing", "Mathematics", "Algorithms", "Engineering"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://docs.scipy.org/doc/scipy/"
  },
  {
    name: "scikit-learn",
    version: "1.3.1 (2023)",
    description: "A machine learning library that provides simple and efficient tools for predictive data analysis. It features various algorithms for classification, regression, clustering, dimensionality reduction, model selection, and preprocessing.",
    tags: ["Machine Learning", "Data Processing", "Algorithms", "Scientific Computing"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://scikit-learn.org/stable/"
  },
  {
    name: "TensorFlow",
    version: "2.14.0 (2023)",
    description: "An end-to-end open source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art in ML and developers easily build and deploy ML-powered applications.",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Processing"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.tensorflow.org/api_docs"
  },
  {
    name: "PyTorch",
    version: "2.1.0 (2023)",
    description: "An open source machine learning framework that accelerates the path from research prototyping to production deployment. It provides a seamless path from research to production with GPU acceleration and distributed training capabilities.",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks", "Scientific Computing"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://pytorch.org/docs/stable/index.html"
  },
  {
    name: "Keras",
    version: "3.0.0 (2023)",
    description: "A deep learning API built on top of TensorFlow 2. It provides essential abstractions and building blocks for developing and shipping machine learning solutions, with a focus on modern deep learning. It follows best practices for reducing cognitive load.",
    tags: ["Deep Learning", "Neural Networks", "Machine Learning", "High-Level API"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://keras.io/"
  },
  {
    name: "XGBoost",
    version: "2.0.0 (2023)",
    description: "An optimized distributed gradient boosting library designed to be highly efficient, flexible and portable. It implements machine learning algorithms under the Gradient Boosting framework, providing parallel tree boosting that solves many data science problems in a fast and accurate way.",
    tags: ["Machine Learning", "Algorithms", "Performance", "Data Processing"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://xgboost.readthedocs.io/"
  },
  
  // Database
  {
    name: "SQLAlchemy",
    version: "2.0.22 (2023)",
    description: "A SQL toolkit and Object-Relational Mapping (ORM) library for Python. It provides a full suite of well-known enterprise-level persistence patterns, designed for efficient and high-performing database access.",
    tags: ["ORM", "Database", "SQL", "Data Storage"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.sqlalchemy.org/"
  },
  {
    name: "pymongo",
    version: "4.5.0 (2023)",
    description: "A Python distribution containing tools for working with MongoDB, a popular NoSQL database. It's the recommended way to work with MongoDB from Python.",
    tags: ["Database", "NoSQL", "Data Storage"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pymongo.readthedocs.io/"
  },
  {
    name: "psycopg2",
    version: "2.9.9 (2023)",
    description: "The most popular PostgreSQL adapter for Python. It's designed for multi-threaded applications and manages its own connection pool.",
    tags: ["Database", "SQL", "PostgreSQL", "Data Storage"],
    compatibility: "Python 3.6+",
    documentationUrl: "https://www.psycopg.org/docs/"
  },
  {
    name: "Redis-py",
    version: "5.0.1 (2023)",
    description: "A Python client for Redis database and key-value store. It provides a way for Python programs to interface with Redis, supporting all Redis commands and operations.",
    tags: ["Database", "Key-Value Store", "Caching", "Data Storage"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://redis-py.readthedocs.io/"
  },
  
  // Utilities and Tools
  {
    name: "Pillow",
    version: "10.1.0 (2023)",
    description: "A fork of PIL (Python Imaging Library) that adds image processing capabilities to your Python interpreter. It provides extensive file format support, an efficient internal representation, and fairly powerful image processing capabilities.",
    tags: ["Image Processing", "Graphics", "Multimedia"],
    compatibility: "Python 3.8+",
    documentationUrl: "https://pillow.readthedocs.io/"
  },
  {
    name: "Beautiful Soup",
    version: "4.12.2 (2023)",
    description: "A Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree.",
    tags: ["Web Scraping", "HTML", "XML", "Data Processing"],
    compatibility: "Python 3.x",
    documentationUrl: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
  },
  {
    name: "Selenium",
    version: "4.14.0 (2023)",
    description: "A portable framework for testing web applications. It provides a playback tool for authoring functional tests without needing to learn a test scripting language. It also provides a test domain specific language to create tests in several popular programming languages.",
    tags: ["Web Automation", "Testing", "Browser Automation"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://selenium-python.readthedocs.io/"
  },
  {
    name: "Celery",
    version: "5.3.4 (2023)",
    description: "An asynchronous task queue/job queue based on distributed message passing. It's focused on real-time operations but supports scheduling as well. Tasks can execute asynchronously or synchronously.",
    tags: ["Task Queue", "Asynchronous I/O", "Distributed Systems", "Background Processing"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.celeryq.dev/"
  },
  {
    name: "pytest",
    version: "7.4.2 (2023)",
    description: "A robust Python testing tool that makes it easy to write small tests, yet scales to support complex functional testing. It provides features like detailed info on failing assert statements, auto-discovery of test modules and functions, and modular fixtures.",
    tags: ["Testing", "Development Tools", "Unit Testing"],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.pytest.org/"
  }
];