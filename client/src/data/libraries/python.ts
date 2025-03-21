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
import { 
  FUNCTIONAL_CATEGORIES, 
  DOMAIN_CATEGORIES, 
  LIBRARY_TYPE_CATEGORIES,
  FEATURE_CATEGORIES,
  INFRASTRUCTURE_CATEGORIES
} from "../constants";

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
  {
    name: "collections",
    version: "Standard Library",
    description: "Implements specialized container data types providing alternatives to Python's general purpose built-in containers. Includes namedtuple, deque, ChainMap, Counter, OrderedDict, defaultdict, and UserDict.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/collections.html"
  },
  {
    name: "itertools",
    version: "Standard Library",
    description: "Provides functions creating iterators for efficient looping. Contains functions like count, cycle, repeat, chain, compress, dropwhile, and more.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/itertools.html"
  },
  {
    name: "functools",
    version: "Standard Library",
    description: "Higher-order functions and operations on callable objects. Contains partial(), reduce(), wraps() and more for functional programming paradigms.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/functools.html"
  },
  {
    name: "json",
    version: "Standard Library",
    description: "Provides functions for encoding and decoding JSON data. Useful for working with web APIs and storing configuration data.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[14], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/json.html"
  },
  {
    name: "re",
    version: "Standard Library",
    description: "Provides regular expression matching operations similar to those found in Perl. Includes functions for pattern matching, searching, and text manipulation.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/re.html"
  },
  {
    name: "pathlib",
    version: "Standard Library",
    description: "Object-oriented filesystem paths. The pathlib module offers classes representing filesystem paths with semantics appropriate for different operating systems.",
    tags: [FUNCTIONAL_CATEGORIES[3], FEATURE_CATEGORIES[1], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "Python 3.4+",
    documentationUrl: "https://docs.python.org/3/library/pathlib.html"
  },
  {
    name: "argparse",
    version: "Standard Library",
    description: "Parser for command-line options, arguments and sub-commands. Makes it easy to write user-friendly command-line interfaces.",
    tags: [FUNCTIONAL_CATEGORIES[3], FEATURE_CATEGORIES[0], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/argparse.html"
  },
  {
    name: "sqlite3",
    version: "Standard Library",
    description: "Interface for SQLite databases. Provides a lightweight disk-based database that doesn't require a separate server process.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/sqlite3.html"
  },
  {
    name: "socket",
    version: "Standard Library",
    description: "Low-level networking interface. This module provides access to the BSD socket interface, allowing for network communication.",
    tags: [FUNCTIONAL_CATEGORIES[1], FEATURE_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/socket.html"
  },
  {
    name: "threading",
    version: "Standard Library",
    description: "Thread-based parallelism. This module constructs higher-level threading interfaces on top of the lower level _thread module.",
    tags: [FEATURE_CATEGORIES[6], FEATURE_CATEGORIES[7], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/threading.html"
  },
  {
    name: "multiprocessing",
    version: "Standard Library",
    description: "Process-based parallelism. This module offers both local and remote concurrency, effectively side-stepping the Global Interpreter Lock by using subprocesses.",
    tags: [FEATURE_CATEGORIES[6], FEATURE_CATEGORIES[7], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/multiprocessing.html"
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
  },
  {
    name: "Beautiful Soup",
    version: "4.12.0",
    description: "Library for pulling data out of HTML and XML files. It provides simple methods for navigating, searching, and modifying parse trees.",
    tags: [FUNCTIONAL_CATEGORIES[5], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[2]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/"
  },
  {
    name: "Scrapy",
    version: "2.8.0",
    description: "Fast high-level web crawling & scraping framework for Python. Used to extract data from websites, process it and store it in a structured format.",
    tags: [FUNCTIONAL_CATEGORIES[5], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[9]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.scrapy.org/en/latest/"
  },
  {
    name: "Selenium",
    version: "4.9.0",
    description: "Tool for automating web browsers. Primarily used for automated testing of web applications, but can also be used for web scraping and browser automation.",
    tags: [FUNCTIONAL_CATEGORIES[8], DOMAIN_CATEGORIES[2], INFRASTRUCTURE_CATEGORIES[3]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://selenium-python.readthedocs.io/"
  },
  {
    name: "Pillow",
    version: "9.5.0",
    description: "Python Imaging Library fork. Adds image processing capabilities to your Python interpreter, supporting many file formats and providing powerful image manipulation capabilities.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pillow.readthedocs.io/en/stable/"
  },
  {
    name: "OpenCV-Python",
    version: "4.7.0",
    description: "Open Source Computer Vision Library for Python. Provides tools for image and video processing, featuring object detection, face recognition, and tracking.",
    tags: [FUNCTIONAL_CATEGORIES[6], DOMAIN_CATEGORIES[1], DOMAIN_CATEGORIES[3]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html"
  },
  {
    name: "SQLAlchemy",
    version: "2.0.0",
    description: "SQL toolkit and Object-Relational Mapping (ORM) system for Python. Provides a full suite of well-known enterprise-level persistence patterns.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[4], DOMAIN_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.sqlalchemy.org/en/20/"
  },
  {
    name: "pytest",
    version: "7.3.1",
    description: "Framework for writing small, readable tests. Makes it easy to write simple tests but scales to support complex functional testing.",
    tags: [FUNCTIONAL_CATEGORIES[8], INFRASTRUCTURE_CATEGORIES[1], INFRASTRUCTURE_CATEGORIES[3]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.pytest.org/en/stable/"
  },
  {
    name: "unittest",
    version: "Standard Library",
    description: "Unit testing framework. Supports test automation, sharing of setup and shutdown code, aggregation of tests into collections, and independence of tests from the reporting framework.",
    tags: [FUNCTIONAL_CATEGORIES[8], INFRASTRUCTURE_CATEGORIES[3], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/unittest.html"
  },
  {
    name: "Celery",
    version: "5.2.7",
    description: "Distributed task queue. Focuses on real-time operation but supports scheduling as well. Used for background processing in web applications.",
    tags: [FEATURE_CATEGORIES[7], INFRASTRUCTURE_CATEGORIES[7], DOMAIN_CATEGORIES[10]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.celeryq.dev/en/stable/"
  },
  {
    name: "asyncio",
    version: "Standard Library",
    description: "Library for writing single-threaded concurrent code using coroutines. The foundation for asynchronous I/O support in Python, including networking and web servers.",
    tags: [FEATURE_CATEGORIES[8], FEATURE_CATEGORIES[7], LIBRARY_TYPE_CATEGORIES[0]],
    compatibility: "Python 3.4+",
    documentationUrl: "https://docs.python.org/3/library/asyncio.html"
  },
  {
    name: "aiohttp",
    version: "3.8.4",
    description: "Asynchronous HTTP client/server for asyncio and Python. Provides both client and server implementations for asynchronous HTTP requests.",
    tags: [FUNCTIONAL_CATEGORIES[6], FEATURE_CATEGORIES[8], FEATURE_CATEGORIES[9]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.aiohttp.org/en/stable/"
  },
  {
    name: "boto3",
    version: "1.26.0",
    description: "Amazon Web Services (AWS) SDK for Python. Provides interfaces to AWS services including S3, EC2, DynamoDB, and many more.",
    tags: [DOMAIN_CATEGORIES[10], LIBRARY_TYPE_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html"
  },
  {
    name: "PyMySQL",
    version: "1.0.3",
    description: "Pure-Python MySQL client library. Implements the MySQL protocol, allowing you to connect and interact with MySQL databases.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], FEATURE_CATEGORIES[9]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://pymysql.readthedocs.io/en/latest/"
  },
  {
    name: "Psycopg2",
    version: "2.9.5",
    description: "PostgreSQL adapter for Python. The most popular PostgreSQL database adapter for Python, supporting efficient database connections.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], FEATURE_CATEGORIES[9]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://www.psycopg.org/docs/"
  },
  {
    name: "cryptography",
    version: "40.0.0",
    description: "Package designed to expose cryptographic primitives and recipes to Python developers. Includes both high level recipes and low level interfaces to common cryptographic algorithms.",
    tags: [FUNCTIONAL_CATEGORIES[7], FEATURE_CATEGORIES[15], DOMAIN_CATEGORIES[2]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://cryptography.io/en/latest/"
  },
  {
    name: "PyYAML",
    version: "6.0",
    description: "YAML parser and emitter for Python. Full-featured YAML framework for reading and writing YAML configuration files.",
    tags: [FEATURE_CATEGORIES[5], FEATURE_CATEGORIES[12], INFRASTRUCTURE_CATEGORIES[5]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://pyyaml.org/wiki/PyYAMLDocumentation"
  },
  {
    name: "Jinja2",
    version: "3.1.0",
    description: "Template engine for Python. Used by web frameworks like Flask to generate HTML, XML, or other markup formats with minimal syntax.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[6]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://jinja.palletsprojects.com/en/3.1.x/"
  },
  {
    name: "Tornado",
    version: "6.3.0",
    description: "Web framework and asynchronous networking library. Focuses on solving the C10k problem and handling thousands of simultaneous connections.",
    tags: [FUNCTIONAL_CATEGORIES[9], FEATURE_CATEGORIES[8], DOMAIN_CATEGORIES[2]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://www.tornadoweb.org/en/stable/"
  },
  {
    name: "Twisted",
    version: "22.10.0",
    description: "Event-driven networking engine. Framework for developing networked applications including servers, clients, and protocols.",
    tags: [FUNCTIONAL_CATEGORIES[1], FEATURE_CATEGORIES[8], LIBRARY_TYPE_CATEGORIES[2]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://twisted.org/documentation/"
  },
  {
    name: "Pydantic",
    version: "1.10.0",
    description: "Data validation and settings management using Python type annotations. Enforces type hints at runtime, and provides user friendly errors when data is invalid.",
    tags: [FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[5], INFRASTRUCTURE_CATEGORIES[0]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.pydantic.dev/"
  },
  {
    name: "black",
    version: "23.3.0",
    description: "The uncompromising Python code formatter. Makes code review faster by producing the smallest diffs possible and ensures consistent code style.",
    tags: [INFRASTRUCTURE_CATEGORIES[3], INFRASTRUCTURE_CATEGORIES[2], FEATURE_CATEGORIES[2]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://black.readthedocs.io/en/stable/"
  },
  {
    name: "isort",
    version: "5.12.0",
    description: "Python utility to sort imports alphabetically and automatically separated into sections. Makes your imports more readable and organized.",
    tags: [INFRASTRUCTURE_CATEGORIES[3], INFRASTRUCTURE_CATEGORIES[2], FEATURE_CATEGORIES[2]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pycqa.github.io/isort/"
  },
  {
    name: "flake8",
    version: "6.0.0",
    description: "Tool for style guide enforcement. Checks Python code against coding style (PEP 8) and programming errors like unused imports and variables.",
    tags: [INFRASTRUCTURE_CATEGORIES[3], INFRASTRUCTURE_CATEGORIES[2], INFRASTRUCTURE_CATEGORIES[0]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://flake8.pycqa.org/en/latest/"
  },
  {
    name: "mypy",
    version: "1.2.0",
    description: "Static type checker for Python. Helps catch many programming errors by checking Python code against type annotations.",
    tags: [INFRASTRUCTURE_CATEGORIES[3], INFRASTRUCTURE_CATEGORIES[2], INFRASTRUCTURE_CATEGORIES[0]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://mypy.readthedocs.io/en/stable/"
  },
  {
    name: "tqdm",
    version: "4.65.0",
    description: "Fast, extensible progress bar for Python and CLI. Makes loops show progress with minimal overhead and provides estimated completion time.",
    tags: [FUNCTIONAL_CATEGORIES[3], FEATURE_CATEGORIES[11], LIBRARY_TYPE_CATEGORIES[3]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://tqdm.github.io/"
  },
  {
    name: "Dash",
    version: "2.9.0",
    description: "Framework for building analytical web applications. No JavaScript required—build rich interactive applications with pure Python.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[6], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://dash.plotly.com/"
  },
  {
    name: "Plotly",
    version: "5.14.0",
    description: "Interactive graphing library for Python. Creates interactive, publication-quality graphs online.",
    tags: [FUNCTIONAL_CATEGORIES[11], DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[6]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://plotly.com/python/"
  },
  {
    name: "Seaborn",
    version: "0.12.0",
    description: "Statistical data visualization based on matplotlib. Provides a high-level interface for drawing attractive and informative statistical graphics.",
    tags: [FUNCTIONAL_CATEGORIES[11], DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[4]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://seaborn.pydata.org/"
  },
  {
    name: "SciPy",
    version: "1.10.0",
    description: "Scientific computing library for Python. Provides modules for optimization, linear algebra, integration, interpolation, and other common tasks in science and engineering.",
    tags: [FUNCTIONAL_CATEGORIES[4], DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[4]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://docs.scipy.org/doc/scipy/"
  },
  {
    name: "Streamlit",
    version: "1.22.0",
    description: "Framework for creating web applications for machine learning and data science. Turns data scripts into shareable web apps in minutes with minimal code.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.streamlit.io/"
  },
  {
    name: "Gradio",
    version: "3.30.0",
    description: "Quickly create customizable UI components for machine learning models. Makes it easy to demo, visualize, and share machine learning models.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[6]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://gradio.app/docs/"
  },
  {
    name: "spaCy",
    version: "3.5.0",
    description: "Industrial-strength natural language processing. Supports deep learning workflows and provides pre-trained models for languages like English, German, French, etc.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://spacy.io/usage"
  },
  {
    name: "NLTK",
    version: "3.8.0",
    description: "Natural Language Toolkit. Suite of libraries and programs for symbolic and statistical natural language processing for English.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.nltk.org/"
  },
  {
    name: "Hugging Face Transformers",
    version: "4.28.0",
    description: "State-of-the-art Natural Language Processing for PyTorch, TensorFlow, and JAX. Provides pre-trained models for tasks like text classification, information extraction, and summarization.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[11]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://huggingface.co/docs/transformers/index"
  },
  {
    name: "Pygame",
    version: "2.4.0",
    description: "Free and open source Python programming language library for making multimedia applications like games. Includes computer graphics and sound libraries.",
    tags: [FUNCTIONAL_CATEGORIES[10], DOMAIN_CATEGORIES[7], FUNCTIONAL_CATEGORIES[6]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://www.pygame.org/docs/"
  },
  {
    name: "PyQt",
    version: "6.5.0",
    description: "Python bindings for the Qt application framework. Used for developing cross-platform GUI applications with rich features.",
    tags: [FUNCTIONAL_CATEGORIES[2], FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[7]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.riverbankcomputing.com/static/Docs/PyQt6/"
  },
  {
    name: "tkinter",
    version: "Standard Library",
    description: "Standard GUI toolkit for Python. Provides an object-oriented interface to the Tk GUI toolkit, allowing creation of desktop applications.",
    tags: [FUNCTIONAL_CATEGORIES[2], FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[7]],
    compatibility: "All Python versions",
    documentationUrl: "https://docs.python.org/3/library/tkinter.html"
  },
  {
    name: "wxPython",
    version: "4.2.0",
    description: "Cross-platform GUI toolkit for Python. Allows developers to create native-looking user interfaces for multiple platforms.",
    tags: [FUNCTIONAL_CATEGORIES[2], FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[7]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://wxpython.org/pages/documentation/"
  },
  {
    name: "PySide6",
    version: "6.5.0",
    description: "Official Python bindings for the Qt framework. Enables building GUI applications with a modern, professional look and feel across all platforms.",
    tags: [FUNCTIONAL_CATEGORIES[2], FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[7]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://doc.qt.io/qtforpython-6/"
  },
  {
    name: "kivy",
    version: "2.2.0",
    description: "Open source Python library for rapid development of applications that make use of innovative user interfaces, such as multi-touch apps.",
    tags: [FUNCTIONAL_CATEGORIES[2], DOMAIN_CATEGORIES[7], DOMAIN_CATEGORIES[8]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://kivy.org/doc/stable/"
  },
  {
    name: "DearPyGui",
    version: "1.9.0",
    description: "Simple to use (but powerful) Python GUI framework. DearPyGui provides a simple, portable, and extensible GUI for Python with a fast render time.",
    tags: [FUNCTIONAL_CATEGORIES[2], FUNCTIONAL_CATEGORIES[3], DOMAIN_CATEGORIES[7]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://github.com/hoffstadt/DearPyGui/wiki"
  },
  {
    name: "PyCaret",
    version: "3.0.0",
    description: "Low-code machine learning library in Python that automates machine learning workflows. Makes machine learning experiments fast and efficient.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[11]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pycaret.gitbook.io/docs/"
  },
  {
    name: "statsmodels",
    version: "0.14.0",
    description: "Statistical models, hypothesis tests, and data exploration in Python. Provides tools for statistical modeling including descriptive statistics and estimation.",
    tags: [DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[4], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.statsmodels.org/stable/index.html"
  },
  {
    name: "SymPy",
    version: "1.11.0",
    description: "Computer algebra system written in pure Python. Helps solve mathematical equations, simplify expressions, perform calculus, and more.",
    tags: [DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[4], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.sympy.org/latest/index.html"
  },
  {
    name: "Boto3",
    version: "1.26.0",
    description: "Amazon Web Services (AWS) SDK for Python. Provides interfaces to AWS services including S3, EC2, DynamoDB, and many more.",
    tags: [DOMAIN_CATEGORIES[10], LIBRARY_TYPE_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html"
  },
  {
    name: "Google Cloud SDK",
    version: "0.24.0",
    description: "Python client library for Google Cloud Platform services. Provides access to Google Cloud services like Storage, BigQuery, Compute Engine, and more.",
    tags: [DOMAIN_CATEGORIES[10], LIBRARY_TYPE_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://cloud.google.com/python/docs/reference"
  },
  {
    name: "Azure SDK for Python",
    version: "1.24.0",
    description: "Microsoft Azure SDK for Python. Provides libraries for interacting with Azure services like Storage, Cosmos DB, Cognitive Services, and more.",
    tags: [DOMAIN_CATEGORIES[10], LIBRARY_TYPE_CATEGORIES[4], LIBRARY_TYPE_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://learn.microsoft.com/en-us/python/api/?view=azure-python"
  },
  {
    name: "Pyramid",
    version: "2.0.0",
    description: "Small, fast, down-to-earth Python web framework. Focuses on flexibility and providing just what's needed for robust web applications.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.pylonsproject.org/projects/pyramid/en/latest/"
  },
  {
    name: "Bottle",
    version: "0.12.25",
    description: "Fast, simple, and lightweight WSGI micro web-framework for Python. Makes building small web applications and APIs with minimal overhead.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://bottlepy.org/docs/dev/"
  },
  {
    name: "CherryPy",
    version: "18.8.0",
    description: "Minimalist Python web framework. Designed for rapid development of web applications with a Pythonic, object-oriented interface.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.cherrypy.dev/en/latest/"
  },
  {
    name: "Web2py",
    version: "2.23.0",
    description: "Full-stack enterprise web framework for rapid development of secure database-driven web applications. Provides all components from data to presentation.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], LIBRARY_TYPE_CATEGORIES[1]],
    compatibility: "Python 3.7+",
    documentationUrl: "http://web2py.com/book"
  },
  {
    name: "Sanic",
    version: "23.3.0",
    description: "Async Python web server and framework focused on speed. Built specifically to work with Python's asyncio features for high-performance web applications.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[8]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://sanic.dev/en/"
  },
  {
    name: "Starlette",
    version: "0.26.0",
    description: "Lightweight ASGI framework/toolkit for building high-performance asyncio services. Used as the foundation for FastAPI and other frameworks.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[8]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.starlette.io/"
  },
  {
    name: "Gunicorn",
    version: "20.1.0",
    description: "WSGI HTTP Server for UNIX. Runs any Python WSGI application and is compatible with various web frameworks.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[10]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.gunicorn.org/en/stable/"
  },
  {
    name: "Uvicorn",
    version: "0.21.0",
    description: "ASGI web server implementation for Python. Lightning-fast ASGI server built on uvloop and httptools.",
    tags: [FUNCTIONAL_CATEGORIES[9], DOMAIN_CATEGORIES[2], FEATURE_CATEGORIES[10]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.uvicorn.org/"
  },
  {
    name: "Dask",
    version: "2023.4.0",
    description: "Parallel computing library. Provides advanced parallelism for analytics, enabling performance at scale for dataframes, arrays, and machine learning.",
    tags: [DOMAIN_CATEGORIES[0], FEATURE_CATEGORIES[7], FEATURE_CATEGORIES[15]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://docs.dask.org/en/stable/"
  },
  {
    name: "Ray",
    version: "2.3.0",
    description: "Framework for building distributed applications. Provides a simple, universal API for building distributed applications.",
    tags: [FEATURE_CATEGORIES[7], DOMAIN_CATEGORIES[11], DOMAIN_CATEGORIES[0]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.ray.io/"
  },
  {
    name: "PySpark",
    version: "3.4.0",
    description: "Python API for Apache Spark. Enables processing large datasets with distributed computing, offering integration with pandas and scikit-learn.",
    tags: [DOMAIN_CATEGORIES[0], DOMAIN_CATEGORIES[11], FEATURE_CATEGORIES[15]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://spark.apache.org/docs/latest/api/python/index.html"
  },
  {
    name: "NLTK",
    version: "3.8.0",
    description: "Natural Language Toolkit. Suite of libraries and programs for symbolic and statistical natural language processing for English.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://www.nltk.org/"
  },
  {
    name: "Gensim",
    version: "4.3.0",
    description: "Topic modeling library. Designed to handle large text collections using efficient algorithms including Word2Vec and Doc2Vec.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://radimrehurek.com/gensim/"
  },
  {
    name: "TextBlob",
    version: "0.17.0",
    description: "Simplified text processing library. Provides a simple API for common NLP tasks like sentiment analysis, part-of-speech tagging, and noun phrase extraction.",
    tags: [DOMAIN_CATEGORIES[2], DOMAIN_CATEGORIES[5], FUNCTIONAL_CATEGORIES[5]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://textblob.readthedocs.io/en/dev/"
  },
  {
    name: "NetworkX",
    version: "3.1",
    description: "Network analysis in Python. Provides tools for the creation, manipulation, and study of complex networks' structure, dynamics, and functions.",
    tags: [DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[5], FEATURE_CATEGORIES[4]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://networkx.org/documentation/stable/"
  },
  {
    name: "PyTorch Lightning",
    version: "2.0.0",
    description: "Lightweight PyTorch wrapper. Takes care of much of the boilerplate code needed in machine learning projects and research.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[11]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://lightning.ai/docs/pytorch/stable/"
  },
  {
    name: "XGBoost",
    version: "1.7.5",
    description: "Optimized distributed gradient boosting library. Implements machine learning algorithms under the gradient boosting framework, providing parallel tree boosting.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[4]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://xgboost.readthedocs.io/en/stable/"
  },
  {
    name: "LightGBM",
    version: "3.3.5",
    description: "Gradient boosting framework. High-performance gradient boosting framework based on decision tree algorithms, used for ranking, classification, and regression.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[4]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://lightgbm.readthedocs.io/en/latest/"
  },
  {
    name: "CatBoost",
    version: "1.2",
    description: "Open-source gradient boosting library with categorical feature support. Provides state-of-the-art results with minimal tuning.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[4]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://catboost.ai/en/docs/"
  },
  {
    name: "Keras",
    version: "2.12.0",
    description: "Deep learning API running on top of TensorFlow. Provides a user-friendly, modular interface for building machine learning models.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[11]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://keras.io/api/"
  },
  {
    name: "fastai",
    version: "2.7.0",
    description: "Deep learning library built on PyTorch. Simplifies training fast and accurate neural networks with modern deep learning best practices.",
    tags: [DOMAIN_CATEGORIES[5], DOMAIN_CATEGORIES[0], FUNCTIONAL_CATEGORIES[11]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.fast.ai/"
  },
  {
    name: "PyMongo",
    version: "4.3.0",
    description: "Python driver for MongoDB. Provides tools for working with MongoDB from Python, including BSON serialization and connection pooling.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], DOMAIN_CATEGORIES[12]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pymongo.readthedocs.io/en/stable/"
  },
  {
    name: "Redis-py",
    version: "4.5.0",
    description: "Python client for Redis key-value store. Provides access to all Redis commands and features in a Pythonic way.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], INFRASTRUCTURE_CATEGORIES[6]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://redis-py.readthedocs.io/en/stable/"
  },
  {
    name: "Cassandra Driver",
    version: "3.26.0",
    description: "Python driver for Apache Cassandra. Provides tools for working with Cassandra database from Python.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], DOMAIN_CATEGORIES[11]],
    compatibility: "Python 3.6+",
    documentationUrl: "https://docs.datastax.com/en/developer/python-driver/3.26/"
  },
  {
    name: "Elasticsearch-py",
    version: "8.7.0",
    description: "Official low-level Python client for Elasticsearch. Provides a convenient way to interact with your Elasticsearch cluster.",
    tags: [FUNCTIONAL_CATEGORIES[0], INFRASTRUCTURE_CATEGORIES[5], FEATURE_CATEGORIES[9]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://elasticsearch-py.readthedocs.io/en/v8.7.0/"
  },
  {
    name: "PyArrow",
    version: "12.0.0",
    description: "Python interface to Apache Arrow. Provides a Pythonic interface to the Arrow C++ libraries for high-performance data interchange.",
    tags: [DOMAIN_CATEGORIES[0], FEATURE_CATEGORIES[15], FEATURE_CATEGORIES[5]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://arrow.apache.org/docs/python/"
  },
  {
    name: "Polars",
    version: "0.17.0",
    description: "Fast DataFrame library for Rust and Python. Lightning-fast DataFrame library with a pandas-like API, built on an Apache Arrow-like memory model.",
    tags: [DOMAIN_CATEGORIES[0], FEATURE_CATEGORIES[4], FEATURE_CATEGORIES[15]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://pola-rs.github.io/polars/py-polars/html/reference/"
  },
  {
    name: "Vaex",
    version: "4.16.0",
    description: "Out-of-core DataFrames. Handles large tabular datasets, similar to pandas but processes datasets larger than memory using memory mapping.",
    tags: [DOMAIN_CATEGORIES[0], FEATURE_CATEGORIES[4], FEATURE_CATEGORIES[15]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://vaex.readthedocs.io/en/latest/"
  },
  {
    name: "Cupy",
    version: "11.6.0",
    description: "NumPy-compatible array library for GPU-accelerated computing. Accelerates matrix operations with CUDA GPU technology.",
    tags: [DOMAIN_CATEGORIES[0], FEATURE_CATEGORIES[15], FUNCTIONAL_CATEGORIES[4]],
    compatibility: "Python 3.7+",
    documentationUrl: "https://docs.cupy.dev/en/stable/"
  },
  {
    name: "JAX",
    version: "0.4.8",
    description: "Autograd and XLA for high-performance machine learning research. Enables transforming numerical functions for differentiation and vectorization.",
    tags: [DOMAIN_CATEGORIES[5], FEATURE_CATEGORIES[15], FUNCTIONAL_CATEGORIES[4]],
    compatibility: "Python 3.8+",
    documentationUrl: "https://jax.readthedocs.io/en/latest/"
  }
];