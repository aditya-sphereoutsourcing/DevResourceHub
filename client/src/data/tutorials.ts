// Type definition for tutorials
interface Tutorial {
  id: number;
  title: string;
  slug: string;
  language: string;
  libraryName: string;
  difficulty: string;
  author?: string;
  publishDate: string;
  lastUpdated: string;
  content: string;
  tags: string[];
  readTime: number;
  codeExamples?: string[];
  relatedTutorials?: string[];
}

/**
 * DevLibGuide Tutorials & Guides
 * 
 * This file contains a collection of comprehensive tutorials and guides
 * for various programming libraries across different languages.
 * 
 * Each tutorial includes:
 * - Title and descriptive content
 * - Code examples with explanations
 * - Difficulty level indicator
 * - Related libraries and concepts
 * - Author information
 */

export const tutorials: Tutorial[] = [
  // React Tutorials
  {
    id: 1,
    title: "Building a Custom Hook for API Data Fetching in React",
    slug: "react-custom-hook-api-data-fetching",
    language: "JavaScript",
    libraryName: "React",
    difficulty: "intermediate",
    author: "Sarah Chen",
    publishDate: "2025-02-15",
    lastUpdated: "2025-03-12",
    content: `
# Building a Custom Hook for API Data Fetching in React

React Hooks revolutionized how we manage state and side effects in functional components. One of the most powerful patterns enabled by hooks is creating custom hooks to encapsulate and reuse logic across your application.

In this tutorial, we'll build a versatile \`useFetch\` custom hook that handles API data fetching with loading states, error handling, and automatic retries.

## Understanding the Problem

When fetching data from APIs in React applications, you often need to:

1. Track loading states to show spinners or skeleton loaders
2. Handle errors gracefully with user-friendly messages
3. Cache responses to avoid unnecessary network requests
4. Implement retry logic for transient network failures
5. Cancel requests when components unmount to prevent memory leaks

These requirements can lead to repetitive code across components. Let's solve this with a custom hook.

## The Custom Hook Implementation

Here's our implementation of the \`useFetch\` hook:

\`\`\`jsx
import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const { 
    initialData = null,
    autoFetch = true,
    retries = 3,
    retryDelay = 1000
  } = options;
  
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  const fetchData = useCallback(async () => {
    if (!url) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`API error: \${response.status}\`);
      }
      
      const jsonData = await response.json();
      setData(jsonData);
      setRetryCount(0);
    } catch (err) {
      setError(err.message || 'An error occurred');
      
      // Implement retry logic
      if (retryCount < retries) {
        const timer = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          fetchData();
        }, retryDelay * (retryCount + 1)); // Exponential backoff
        
        return () => clearTimeout(timer);
      }
    } finally {
      setLoading(false);
    }
  }, [url, retries, retryDelay, retryCount]);
  
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
    
    return () => {
      // Cleanup logic if needed
    };
  }, [autoFetch, fetchData]);
  
  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
\`\`\`

## Using the Custom Hook

Now let's see how to use this hook in a component:

\`\`\`jsx
import React from 'react';
import useFetch from './hooks/useFetch';

function UserProfile({ userId }) {
  const { 
    data: user, 
    loading, 
    error, 
    refetch 
  } = useFetch(\`https://api.example.com/users/\${userId}\`, {
    retries: 2
  });
  
  if (loading) {
    return <div>Loading user data...</div>;
  }
  
  if (error) {
    return (
      <div>
        <p>Error loading user: {error}</p>
        <button onClick={refetch}>Try Again</button>
      </div>
    );
  }
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserProfile;
\`\`\`

## Advanced Usage: Dependent Fetching

Sometimes you need to fetch data that depends on other data. Here's how to handle that:

\`\`\`jsx
function UserPosts({ userId }) {
  const { 
    data: user, 
    loading: loadingUser, 
    error: userError 
  } = useFetch(\`https://api.example.com/users/\${userId}\`);
  
  const { 
    data: posts, 
    loading: loadingPosts, 
    error: postsError 
  } = useFetch(
    user ? \`https://api.example.com/users/\${user.id}/posts\` : null,
    { autoFetch: !!user }
  );
  
  if (loadingUser) {
    return <div>Loading user...</div>;
  }
  
  if (userError) {
    return <div>Error loading user: {userError}</div>;
  }
  
  return (
    <div>
      <h2>{user.name}'s Posts</h2>
      {loadingPosts ? (
        <div>Loading posts...</div>
      ) : postsError ? (
        <div>Error loading posts: {postsError}</div>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

## Best Practices and Considerations

1. **Abort Controllers**: For production applications, consider implementing abort controllers to cancel in-flight requests.
2. **Caching**: Add caching logic to avoid refetching data that hasn't changed.
3. **TypeScript**: If using TypeScript, add proper type definitions for better developer experience.
4. **Testing**: Write tests for your custom hook using React Testing Library's \`renderHook\` utility.

## Conclusion

Custom hooks like \`useFetch\` allow you to extract and reuse common logic across your React components. This approach makes your code more maintainable, testable, and consistent.

As a next step, consider expanding this hook to support:
- POST, PUT, and DELETE requests
- Request cancellation
- Request deduplication
- Response transformation
`,
    tags: ["React", "JavaScript", "Hooks", "API", "Data Fetching"],
    readTime: 10,
    codeExamples: [
      "import { useState, useEffect, useCallback } from 'react';\n\nfunction useFetch(url, options = {}) {\n  const { \n    initialData = null,\n    autoFetch = true,\n    retries = 3,\n    retryDelay = 1000\n  } = options;\n  \n  const [data, setData] = useState(initialData);\n  const [loading, setLoading] = useState(autoFetch);\n  const [error, setError] = useState(null);\n  const [retryCount, setRetryCount] = useState(0);\n  \n  // ... rest of implementation\n  \n  return { data, loading, error, refetch: fetchData };\n}"
    ],
    relatedTutorials: ["react-useeffect-lifecycle", "react-error-boundaries"]
  },
  
  // Python NumPy Tutorial
  {
    id: 2,
    title: "Efficient Data Analysis with NumPy Arrays",
    slug: "efficient-data-analysis-numpy-arrays",
    language: "Python",
    libraryName: "NumPy",
    difficulty: "beginner",
    author: "David Rodriguez",
    publishDate: "2025-01-10",
    lastUpdated: "2025-03-05",
    content: `
# Efficient Data Analysis with NumPy Arrays

NumPy is the foundation of the Python scientific computing stack. At its core are the powerful N-dimensional array objects that enable efficient operations on large datasets. In this tutorial, we'll explore how to leverage NumPy arrays for data analysis tasks.

## Why NumPy?

Before NumPy, Python lists were the primary data structure for storing collections of items. However, Python lists have limitations when it comes to numerical computing:

- They're not optimized for numerical operations
- They consume more memory than necessary for numerical data
- Operations on them are slower than specialized numerical libraries

NumPy solves these problems by providing:

- A powerful N-dimensional array object
- Sophisticated broadcasting functions
- Tools for integrating C/C++ code
- Useful linear algebra, Fourier transform, and random number capabilities

## Creating NumPy Arrays

Let's start with creating NumPy arrays:

\`\`\`python
import numpy as np

# From Python lists
array_1d = np.array([1, 2, 3, 4, 5])
array_2d = np.array([[1, 2, 3], [4, 5, 6]])

print(array_1d)  # [1 2 3 4 5]
print(array_2d)  # [[1 2 3]
                  #  [4 5 6]]

# Array creation functions
zeros = np.zeros((3, 4))  # 3x4 array of zeros
ones = np.ones((2, 3, 4))  # 2x3x4 array of ones
random_array = np.random.random((2, 2))  # 2x2 array of random values between 0 and 1
range_array = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # 5 evenly spaced values from 0 to 1: [0, 0.25, 0.5, 0.75, 1]
\`\`\`

## Array Attributes and Methods

NumPy arrays have useful attributes and methods that provide information about their structure:

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)      # (2, 3) - dimensions
print(arr.ndim)       # 2 - number of dimensions
print(arr.size)       # 6 - total number of elements
print(arr.dtype)      # int64 - data type of elements
print(arr.itemsize)   # 8 - size in bytes of each element

# Converting data types
float_arr = arr.astype(np.float64)
print(float_arr.dtype)  # float64
\`\`\`

## Array Indexing and Slicing

NumPy offers flexible ways to access array elements:

\`\`\`python
arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])

# Indexing
print(arr[0, 0])    # 1 - first element
print(arr[2, 3])    # 12 - last element

# Slicing
print(arr[:, 1])    # [2, 6, 10] - second column
print(arr[1, :])    # [5, 6, 7, 8] - second row
print(arr[0:2, 1:3])  # [[2, 3], [6, 7]] - 2x2 slice

# Boolean indexing
mask = arr > 6
print(mask)         # Boolean array showing where condition is True
print(arr[mask])    # [7, 8, 9, 10, 11, 12] - elements where condition is True

# Fancy indexing
indices = np.array([0, 2])
print(arr[indices])  # [[1, 2, 3, 4], [9, 10, 11, 12]] - first and third rows
\`\`\`

## Vectorized Operations

One of NumPy's most powerful features is vectorization, which performs operations on entire arrays without explicit loops:

\`\`\`python
# Arithmetic operations
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])

print(arr1 + arr2)    # [5, 7, 9]
print(arr1 * arr2)    # [4, 10, 18]
print(arr1 ** 2)      # [1, 4, 9]

# Statistical operations
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(np.sum(arr))          # 21 - sum of all elements
print(np.sum(arr, axis=0))  # [5, 7, 9] - sum of each column
print(np.sum(arr, axis=1))  # [6, 15] - sum of each row
print(np.mean(arr))         # 3.5 - mean of all elements
print(np.std(arr))          # Standard deviation
print(np.min(arr, axis=0))  # Minimum value in each column
\`\`\`

## Broadcasting

Broadcasting enables NumPy to work with arrays of different shapes during arithmetic operations:

\`\`\`python
# Broadcasting example
arr = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
row_vector = np.array([10, 20, 30])

# The row vector is "broadcast" to all rows of the array
result = arr + row_vector
print(result)
# [[11, 22, 33],
#  [14, 25, 36],
#  [17, 28, 39]]
\`\`\`

## Reshaping and Transposing

NumPy provides functions to change the shape of arrays:

\`\`\`python
arr = np.arange(12)

# Reshape to 3x4 array
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[ 0,  1,  2,  3],
#  [ 4,  5,  6,  7],
#  [ 8,  9, 10, 11]]

# Transpose (swap rows and columns)
transposed = reshaped.T
print(transposed)
# [[ 0,  4,  8],
#  [ 1,  5,  9],
#  [ 2,  6, 10],
#  [ 3,  7, 11]]

# Flatten to 1D array
flattened = reshaped.flatten()
print(flattened)  # [ 0  1  2  3  4  5  6  7  8  9 10 11]
\`\`\`

## Practical Example: Data Analysis

Let's apply NumPy to a simple data analysis task:

\`\`\`python
# Generate synthetic data: student test scores for 5 students over 4 tests
scores = np.array([
    [88, 92, 75, 85],  # Student 1
    [90, 87, 89, 93],  # Student 2
    [75, 68, 80, 72],  # Student 3
    [95, 98, 92, 96],  # Student 4
    [82, 85, 88, 80]   # Student 5
])

# Calculate statistics
student_averages = np.mean(scores, axis=1)
test_averages = np.mean(scores, axis=0)
top_student_idx = np.argmax(student_averages)
hardest_test_idx = np.argmin(test_averages)

print(f"Student averages: {student_averages}")
print(f"Test averages: {test_averages}")
print(f"Top student is student {top_student_idx + 1} with average {student_averages[top_student_idx]:.1f}")
print(f"Hardest test was test {hardest_test_idx + 1} with average {test_averages[hardest_test_idx]:.1f}")

# Find students who scored above 90 on any test
high_scorers = np.any(scores > 90, axis=1)
print(f"Students with at least one score above 90: {np.where(high_scorers)[0] + 1}")

# Calculate how much each student improved from first to last test
improvement = scores[:, -1] - scores[:, 0]
print(f"Improvement from first to last test: {improvement}")
most_improved_idx = np.argmax(improvement)
print(f"Most improved student: Student {most_improved_idx + 1} with {improvement[most_improved_idx]} points")
\`\`\`

## Conclusion

NumPy arrays provide an efficient foundation for numerical computing in Python. By leveraging vectorization and broadcasting, you can write clean, concise code that operates efficiently on large datasets.

Next steps to explore:
- Linear algebra operations with NumPy
- Integration with Pandas for more advanced data analysis
- Visualization of NumPy data with Matplotlib
- Advanced indexing techniques
`,
    tags: ["Python", "NumPy", "Data Analysis", "Arrays", "Scientific Computing"],
    readTime: 12,
    codeExamples: [
      "import numpy as np\n\n# Creating arrays\narray_1d = np.array([1, 2, 3, 4, 5])\narray_2d = np.array([[1, 2, 3], [4, 5, 6]])\n\n# Array operations\nprint(array_1d * 2)  # [2 4 6 8 10]"
    ],
    relatedTutorials: ["pandas-data-analysis", "numpy-linear-algebra"]
  },
  
  // C++ STL Tutorial
  {
    id: 3,
    title: "Mastering C++ STL Containers and Algorithms",
    slug: "mastering-cpp-stl-containers-algorithms",
    language: "C++",
    libraryName: "STL",
    difficulty: "intermediate",
    author: "Michael Chen",
    publishDate: "2024-12-20",
    lastUpdated: "2025-02-28",
    content: `
# Mastering C++ STL Containers and Algorithms

The C++ Standard Template Library (STL) is a powerful collection of container classes, algorithms, and iterators that form a cornerstone of modern C++ programming. Mastering the STL is essential for writing efficient, maintainable C++ code.

## Introduction to STL

The STL consists of three major components:

1. **Containers**: Data structures like vectors, lists, maps, and sets
2. **Algorithms**: Functions that operate on containers, such as sorting, searching, and transforming
3. **Iterators**: Objects that allow traversal of container elements

Together, these components provide a consistent, efficient framework for managing and manipulating data in C++.

## Core Container Types

### Sequence Containers

Sequence containers store elements in a linear sequence with fast access to elements by position.

#### Vector

\`std::vector\` is a dynamic array that provides random access to elements and grows automatically as needed:

\`\`\`cpp
#include <iostream>
#include <vector>

int main() {
    // Initialize a vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Add elements
    numbers.push_back(6);  // Add to end
    
    // Access elements
    std::cout << "First element: " << numbers[0] << std::endl;
    std::cout << "Last element: " << numbers.back() << std::endl;
    
    // Get size
    std::cout << "Size: " << numbers.size() << std::endl;
    
    // Iterate over elements
    std::cout << "All elements: ";
    for (const int& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Remove elements
    numbers.pop_back();  // Remove last element
    
    // Clear all elements
    numbers.clear();
    
    return 0;
}
\`\`\`

#### List

\`std::list\` is a doubly-linked list that allows constant-time insertion and removal at any position:

\`\`\`cpp
#include <iostream>
#include <list>

int main() {
    std::list<int> numbers = {1, 2, 4, 5};
    
    // Insert at specific position
    auto it = std::next(numbers.begin(), 2);  // Iterator to third element
    numbers.insert(it, 3);  // Insert 3 before third element
    
    // Now list is {1, 2, 3, 4, 5}
    
    // Remove elements by value
    numbers.remove(5);  // Remove all occurrences of 5
    
    // Print elements
    for (const int& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    return 0;
}
\`\`\`

### Associative Containers

Associative containers implement sorted data structures for fast lookup.

#### Map

\`std::map\` stores key-value pairs sorted by key:

\`\`\`cpp
#include <iostream>
#include <map>
#include <string>

int main() {
    // Define a map of string to int
    std::map<std::string, int> ages;
    
    // Insert elements
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages.insert({"Charlie", 35});
    
    // Access elements
    std::cout << "Bob's age: " << ages["Bob"] << std::endl;
    
    // Check if key exists
    if (ages.find("David") == ages.end()) {
        std::cout << "David not found" << std::endl;
    }
    
    // Iterate over key-value pairs
    for (const auto& pair : ages) {
        std::cout << pair.first << ": " << pair.second << std::endl;
    }
    
    // Remove an element
    ages.erase("Bob");
    
    return 0;
}
\`\`\`

#### Set

\`std::set\` stores unique elements in sorted order:

\`\`\`cpp
#include <iostream>
#include <set>

int main() {
    std::set<int> numbers = {5, 3, 1, 4, 2, 3};  // Note: duplicate 3 will be ignored
    
    // Check size
    std::cout << "Size: " << numbers.size() << std::endl;  // 5, not 6
    
    // Insert new element
    numbers.insert(6);
    
    // Check if element exists
    if (numbers.count(3) > 0) {
        std::cout << "3 is in the set" << std::endl;
    }
    
    // Print in order (set is always sorted)
    for (const int& num : numbers) {
        std::cout << num << " ";  // Output: 1 2 3 4 5 6
    }
    std::cout << std::endl;
    
    return 0;
}
\`\`\`

### Unordered Containers

Unordered containers implement hash tables for very fast lookup on average.

#### Unordered Map

\`std::unordered_map\` is similar to map but uses a hash table for O(1) average lookup:

\`\`\`cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
    std::unordered_map<std::string, int> scores;
    
    // Insert elements
    scores["Alice"] = 95;
    scores["Bob"] = 87;
    scores["Charlie"] = 92;
    
    // Faster lookup than std::map
    std::cout << "Bob's score: " << scores["Bob"] << std::endl;
    
    return 0;
}
\`\`\`

## STL Algorithms

The STL provides numerous algorithms for operating on container elements:

### Sorting

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>  // For std::sort

int main() {
    std::vector<int> numbers = {5, 2, 8, 1, 3};
    
    // Sort in ascending order
    std::sort(numbers.begin(), numbers.end());
    
    // Print sorted vector
    for (const int& num : numbers) {
        std::cout << num << " ";  // Output: 1 2 3 5 8
    }
    std::cout << std::endl;
    
    // Sort in descending order
    std::sort(numbers.begin(), numbers.end(), std::greater<int>());
    
    // Print sorted vector
    for (const int& num : numbers) {
        std::cout << num << " ";  // Output: 8 5 3 2 1
    }
    std::cout << std::endl;
    
    return 0;
}
\`\`\`

### Finding

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>  // For std::find

int main() {
    std::vector<int> numbers = {5, 2, 8, 1, 3};
    
    // Find element
    auto it = std::find(numbers.begin(), numbers.end(), 8);
    
    if (it != numbers.end()) {
        std::cout << "Found " << *it << " at position ";
        std::cout << std::distance(numbers.begin(), it) << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }
    
    return 0;
}
\`\`\`

### Transforming

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>  // For std::transform

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::vector<int> squared(numbers.size());
    
    // Transform every element by squaring it
    std::transform(numbers.begin(), numbers.end(), squared.begin(),
                   [](int x) { return x * x; });
    
    // Print squared numbers
    for (const int& num : squared) {
        std::cout << num << " ";  // Output: 1 4 9 16 25
    }
    std::cout << std::endl;
    
    return 0;
}
\`\`\`

## Practical Example: Document Word Counter

Let's combine several STL components to build a word frequency counter:

\`\`\`cpp
#include <iostream>
#include <string>
#include <map>
#include <vector>
#include <algorithm>
#include <sstream>

// Function to count word frequencies in a text
std::map<std::string, int> countWordFrequencies(const std::string& text) {
    std::map<std::string, int> frequencies;
    std::istringstream stream(text);
    std::string word;
    
    // Extract and count each word
    while (stream >> word) {
        // Remove punctuation (simple approach)
        word.erase(std::remove_if(word.begin(), word.end(), 
                                 [](char c) { return !std::isalnum(c); }),
                  word.end());
        
        // Convert to lowercase
        std::transform(word.begin(), word.end(), word.begin(),
                      [](char c) { return std::tolower(c); });
        
        // Only count non-empty words
        if (!word.empty()) {
            frequencies[word]++;
        }
    }
    
    return frequencies;
}

// Function to find most frequent words
std::vector<std::pair<std::string, int>> findMostFrequentWords(
    const std::map<std::string, int>& frequencies, int n) {
    
    // Copy map entries to a vector for sorting
    std::vector<std::pair<std::string, int>> words(
        frequencies.begin(), frequencies.end());
    
    // Sort by frequency (descending)
    std::sort(words.begin(), words.end(),
             [](const auto& a, const auto& b) { return a.second > b.second; });
    
    // Truncate to top n words
    if (words.size() > n) {
        words.resize(n);
    }
    
    return words;
}

int main() {
    // Sample text
    std::string text = "The quick brown fox jumps over the lazy dog. "
                      "The dog was not very lazy, but rather quite alert. "
                      "The fox was indeed quick and brown.";
    
    // Count word frequencies
    auto frequencies = countWordFrequencies(text);
    
    // Get top 5 most frequent words
    auto topWords = findMostFrequentWords(frequencies, 5);
    
    // Print results
    std::cout << "Top 5 most frequent words:" << std::endl;
    for (const auto& word : topWords) {
        std::cout << word.first << ": " << word.second << std::endl;
    }
    
    return 0;
}
\`\`\`

## Best Practices for STL Usage

1. **Use the right container for the job**:
   - Need fast random access? Use \`std::vector\`
   - Need fast insertion/deletion in the middle? Use \`std::list\`
   - Need key-value lookup? Use \`std::map\` or \`std::unordered_map\`

2. **Leverage algorithms instead of manual loops**:
   - STL algorithms are optimized and well-tested
   - They express intent more clearly than hand-written loops

3. **Use range-based for loops** when possible for cleaner iteration

4. **Remember container invalidation rules**:
   - Vector iterators may be invalidated after adding elements
   - List iterators remain valid even when adding/removing other elements

5. **Prefer \`emplace\` over \`insert\`** for constructing elements in-place

## Conclusion

The STL is a fundamental part of modern C++ programming. By mastering its containers, algorithms, and iterators, you can write more efficient, concise, and maintainable code. This tutorial has covered the basics, but the STL has much more to offer as you continue to explore its capabilities.

For further learning, explore other STL components like:
- \`std::array\` for fixed-size arrays
- \`std::deque\` for double-ended queues
- \`std::priority_queue\` for heap operations
- Additional algorithms like \`std::for_each\`, \`std::accumulate\`, and \`std::generate\`
`,
    tags: ["C++", "STL", "Containers", "Algorithms", "Data Structures"],
    readTime: 15,
    codeExamples: [
      "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {5, 3, 1, 4, 2};\n    std::sort(v.begin(), v.end());\n    \n    for (int i : v) {\n        std::cout << i << ' ';\n    }\n    \n    return 0;\n}"
    ],
    relatedTutorials: ["cpp-memory-management", "cpp-smart-pointers"]
  },
  
  // Rust Tokio Tutorial
  {
    id: 4,
    title: "Asynchronous Programming with Rust and Tokio",
    slug: "asynchronous-programming-rust-tokio",
    language: "Rust",
    libraryName: "tokio",
    difficulty: "advanced",
    author: "Elena Petrova",
    publishDate: "2025-01-25",
    lastUpdated: "2025-03-10",
    content: `
# Asynchronous Programming with Rust and Tokio

Asynchronous programming allows applications to handle multiple concurrent operations without blocking the main execution thread. In Rust, the Tokio library provides a robust, efficient runtime for writing asynchronous code. This tutorial will guide you through using Tokio to build high-performance, concurrent applications.

## Understanding Asynchronous Programming

In traditional synchronous code, operations execute sequentially. When a function performs I/O (like reading a file or making a network request), the thread is blocked until the operation completes. This inefficiency becomes problematic when handling many concurrent operations.

Asynchronous programming solves this by allowing a single thread to manage multiple operations simultaneously. When an operation would block, the runtime switches to another task instead of waiting idle.

## Why Tokio?

Tokio is Rust's most popular asynchronous runtime, offering:

1. A multi-threaded runtime for executing asynchronous code
2. Utilities for common async tasks like timers and I/O operations
3. A task scheduler that efficiently manages thousands of concurrent tasks
4. Tools for writing safe, concurrent network applications

## Getting Started with Tokio

First, add Tokio to your Cargo.toml:

\`\`\`toml
[dependencies]
tokio = { version = "1.28", features = ["full"] }
\`\`\`

For a minimal setup, you can replace \`"full"\` with specific features you need, like \`["rt", "macros", "time", "net"]\`.

## Your First Tokio Program

Let's create a simple program that performs concurrent tasks:

\`\`\`rust
use tokio::time::{sleep, Duration};

// The #[tokio::main] macro sets up the Tokio runtime
#[tokio::main]
async fn main() {
    println!("Program start");
    
    // Spawn two concurrent tasks
    let task1 = tokio::spawn(async {
        println!("Task 1: Starting");
        sleep(Duration::from_millis(500)).await;
        println!("Task 1: Finished after 500ms");
        "Task 1 result"
    });
    
    let task2 = tokio::spawn(async {
        println!("Task 2: Starting");
        sleep(Duration::from_millis(1000)).await;
        println!("Task 2: Finished after 1000ms");
        "Task 2 result"
    });
    
    // Wait for both tasks to complete and get their results
    let result1 = task1.await.unwrap();
    let result2 = task2.await.unwrap();
    
    println!("Results: {} and {}", result1, result2);
    println!("Program end");
}
\`\`\`

This program:
1. Initializes the Tokio runtime with \`#[tokio::main]\`
2. Spawns two asynchronous tasks that run concurrently
3. Waits for both tasks to complete using \`.await\`
4. Collects and displays their results

The total execution time will be about 1 second, not 1.5 seconds, because the tasks run concurrently.

## Understanding async/await

The \`async\` and \`await\` keywords are at the heart of Rust's asynchronous programming model:

- \`async\` turns a function or block into a future that can be awaited
- \`await\` suspends execution until a future completes

Here's a simple example:

\`\`\`rust
async fn fetch_data(url: &str) -> Result<String, Box<dyn std::error::Error>> {
    // Simulate network request
    sleep(Duration::from_millis(200)).await;
    Ok(format!("Data from {}", url))
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let data = fetch_data("https://example.com").await?;
    println!("Received: {}", data);
    Ok(())
}
\`\`\`

## Handling Multiple Futures

Tokio provides several ways to work with multiple asynchronous operations:

### Sequential Execution

\`\`\`rust
#[tokio::main]
async fn main() {
    // Execute one after another
    let result1 = async_operation_1().await;
    let result2 = async_operation_2().await;
}
\`\`\`

### Concurrent Execution with join!

\`\`\`rust
use tokio::join;

#[tokio::main]
async fn main() {
    // Execute both concurrently and wait for both to complete
    let (result1, result2) = join!(
        async_operation_1(),
        async_operation_2()
    );
}
\`\`\`

### Concurrent Execution with select!

\`\`\`rust
use tokio::select;

#[tokio::main]
async fn main() {
    // Wait for the first operation to complete
    select! {
        result = async_operation_1() => {
            println!("Operation 1 completed first: {:?}", result);
        }
        result = async_operation_2() => {
            println!("Operation 2 completed first: {:?}", result);
        }
    }
}
\`\`\`

## Practical Example: Concurrent HTTP Requests

Let's build a program that makes concurrent HTTP requests using the \`reqwest\` library with Tokio:

\`\`\`rust
use std::error::Error;
use tokio::time::Instant;

// Add these dependencies to Cargo.toml:
// reqwest = { version = "0.11", features = ["json"] }
// serde = { version = "1.0", features = ["derive"] }
// serde_json = "1.0"

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let start = Instant::now();
    
    // List of URLs to fetch
    let urls = vec![
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2",
        "https://jsonplaceholder.typicode.com/posts/3",
    ];
    
    // Create a vector to hold our futures
    let mut tasks = vec![];
    
    // Create a client
    let client = reqwest::Client::new();
    
    // Spawn a task for each URL
    for url in urls {
        let client = client.clone();
        let task = tokio::spawn(async move {
            println!("Fetching: {}", url);
            let response = client.get(url).send().await?;
            let body = response.text().await?;
            println!("Completed: {} ({} bytes)", url, body.len());
            Ok::<_, Box<dyn Error + Send + Sync>>(body)
        });
        tasks.push(task);
    }
    
    // Wait for all requests to complete
    let mut results = vec![];
    for task in tasks {
        let result = task.await??;
        results.push(result);
    }
    
    println!("All requests completed in {:?}", start.elapsed());
    println!("Received {} responses", results.len());
    
    Ok(())
}
\`\`\`

## Advanced Tokio Features

### Channels for Task Communication

Tokio provides channels for communicating between tasks:

\`\`\`rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    // Create a channel with buffer size 10
    let (tx, mut rx) = mpsc::channel(10);
    
    // Spawn a task that sends messages
    tokio::spawn(async move {
        for i in 1..=5 {
            tx.send(format!("Message {}", i)).await.unwrap();
            sleep(Duration::from_millis(100)).await;
        }
    });
    
    // Receive messages
    while let Some(message) = rx.recv().await {
        println!("Received: {}", message);
    }
    
    println!("Channel closed");
}
\`\`\`

### Using Tokio's I/O Utilities

Tokio provides asynchronous versions of common I/O operations:

\`\`\`rust
use tokio::fs::File;
use tokio::io::{self, AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() -> io::Result<()> {
    // Asynchronously open a file
    let mut file = File::open("input.txt").await?;
    
    // Read the file's contents
    let mut contents = String::new();
    file.read_to_string(&mut contents).await?;
    
    // Create a new file and write to it
    let mut output = File::create("output.txt").await?;
    output.write_all(contents.to_uppercase().as_bytes()).await?;
    
    println!("File processing complete");
    Ok(())
}
\`\`\`

### Building a TCP Server

Tokio makes it easy to build network servers:

\`\`\`rust
use tokio::net::{TcpListener, TcpStream};
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() -> io::Result<()> {
    // Bind to address
    let listener = TcpListener::bind("127.0.0.1:8080").await?;
    println!("Server listening on port 8080");
    
    // Accept connections in a loop
    loop {
        // Accept a new connection
        let (socket, addr) = listener.accept().await?;
        println!("New connection from: {}", addr);
        
        // Spawn a task to handle the connection
        tokio::spawn(async move {
            if let Err(e) = handle_connection(socket).await {
                println!("Error handling connection: {}", e);
            }
        });
    }
}

async fn handle_connection(mut socket: TcpStream) -> io::Result<()> {
    let mut buffer = [0; 1024];
    
    // Read data from the socket
    let n = socket.read(&mut buffer).await?;
    
    if n == 0 {
        return Ok(());  // Connection closed
    }
    
    // Echo the data back
    socket.write_all(&buffer[0..n]).await?;
    
    Ok(())
}
\`\`\`

## Best Practices for Tokio

1. **Don't block the async runtime**:
   - Avoid CPU-intensive operations in async tasks
   - Use \`spawn_blocking\` for CPU-bound work

2. **Be mindful of task size**:
   - Many small tasks are better than a few large ones
   - Use \`join!\` for simple composition of futures

3. **Handle cancellation gracefully**:
   - Tasks can be cancelled when dropped
   - Use \`select!\` with a default arm for non-blocking operations

4. **Use the appropriate channel type**:
   - \`mpsc\` for multiple producers, single consumer
   - \`oneshot\` for single-use, one-to-one communication
   - \`broadcast\` for multiple producers, multiple consumers

5. **Monitor your tasks**:
   - Use structured logging with \`tracing\`
   - Set up metrics to track task performance

## Conclusion

Tokio provides a powerful foundation for building asynchronous applications in Rust. With its efficient runtime, comprehensive utilities, and idiomatic design, it enables developers to create highly concurrent, performant software while maintaining Rust's safety guarantees.

As you continue learning Tokio, explore these topics:
- Error handling in asynchronous code
- Resource management with async/await
- Testing asynchronous functions
- Integrating with synchronous code
- Advanced patterns like backpressure and rate limiting
`,
    tags: ["Rust", "Tokio", "Async", "Concurrency", "Networking"],
    readTime: 18,
    codeExamples: [
      "use tokio::time::{sleep, Duration};\n\n#[tokio::main]\nasync fn main() {\n    println!(\"Starting two tasks...\");\n    \n    tokio::spawn(async {\n        sleep(Duration::from_millis(100)).await;\n        println!(\"Task 1 complete\");\n    });\n    \n    tokio::spawn(async {\n        sleep(Duration::from_millis(200)).await;\n        println!(\"Task 2 complete\");\n    });\n    \n    // Wait for both tasks to finish\n    sleep(Duration::from_millis(300)).await;\n    println!(\"All tasks complete\");\n}"
    ],
    relatedTutorials: ["rust-error-handling", "tokio-websockets"]
  },
  
  // Swift Combine Tutorial
  {
    id: 5,
    title: "Reactive Programming with Swift Combine",
    slug: "reactive-programming-swift-combine",
    language: "Swift",
    libraryName: "Combine",
    difficulty: "intermediate",
    author: "James Wilson",
    publishDate: "2025-02-10",
    lastUpdated: "2025-03-15",
    content: `
# Reactive Programming with Swift Combine

Apple's Combine framework, introduced in iOS 13, provides a declarative Swift API for processing values over time. It's Apple's take on reactive programming, similar to ReactiveX (RxSwift) and ReactiveSwift. This tutorial will introduce you to reactive programming concepts using Combine and show you how to leverage them in your iOS applications.

## Understanding Reactive Programming

Reactive programming is a paradigm focused on data streams and the propagation of changes. Instead of imperatively pulling data, you declare dependencies between data sources, and the framework takes care of propagating changes through your system.

Key concepts in reactive programming include:

- **Publishers**: Sources that emit values over time
- **Subscribers**: Consumers that receive and react to values
- **Operators**: Functions that transform, filter, or combine values from publishers
- **Subscriptions**: Connections between publishers and subscribers

## Getting Started with Combine

Combine is built into iOS 13+ and macOS Catalina+, so there's no need to install any external dependencies. Let's start with a simple example:

\`\`\`swift
import Combine
import Foundation

// Create a simple publisher that emits three values and then completes
let publisher = [1, 2, 3].publisher

// Subscribe to the publisher
let subscription = publisher
    .sink(receiveCompletion: { completion in
        print("Received completion:", completion)
    }, receiveValue: { value in
        print("Received value:", value)
    })

// Output:
// Received value: 1
// Received value: 2
// Received value: 3
// Received completion: finished
\`\`\`

This example:
1. Creates a publisher from an array using the \`.publisher\` property
2. Subscribes to the publisher with the \`.sink\` operator
3. Defines callbacks for when values are received and when the publisher completes

## Core Combine Components

### Publishers

Publishers emit values and completion events to subscribers. Combine provides several built-in publishers:

\`\`\`swift
// Just: Emits a single value and then completes
let justPublisher = Just("Hello, Combine!")

// Empty: Completes immediately without emitting any values
let emptyPublisher = Empty<String, Never>()

// Fail: Completes with an error
let failPublisher = Fail<String, Error>(error: SomeError())

// Deferred: Creates a publisher when a subscriber attaches
let deferredPublisher = Deferred {
    Just("I was created at subscription time")
}

// Future: Executes an async operation and publishes the result
let futurePublisher = Future<String, Never> { promise in
    DispatchQueue.global().asyncAfter(deadline: .now() + 1) {
        promise(.success("Future result after 1 second"))
    }
}

// Timer: Emits values on a schedule
let timerPublisher = Timer.publish(every: 1, on: .main, in: .common)
    .autoconnect()
\`\`\`

### Subscribers

Subscribers receive values and completion events from publishers:

\`\`\`swift
// sink: The most common subscriber, with closures for handling events
let sinkSubscription = publisher.sink(
    receiveCompletion: { completion in
        // Handle completion (finished or failure)
    },
    receiveValue: { value in
        // Handle each received value
    }
)

// assign: Assigns received values to a property on an object
class ViewModel {
    @Published var text: String = ""
}

let viewModel = ViewModel()
let assignSubscription = publisher
    .assign(to: \\ViewModel.text, on: viewModel)
\`\`\`

### Operators

Operators transform, filter, or combine values from publishers:

\`\`\`swift
// Transform values with map
let stringPublisher = [1, 2, 3].publisher
    .map { "Number: \($0)" }

// Filter values
let evenNumbersPublisher = [1, 2, 3, 4, 5].publisher
    .filter { $0 % 2 == 0 }

// Combine latest values from multiple publishers
let publisher1 = PassthroughSubject<String, Never>()
let publisher2 = PassthroughSubject<Int, Never>()

let combinedPublisher = publisher1
    .combineLatest(publisher2)
    .map { string, number in
        return "\\(string): \\(number)"
    }

// Chain operators
let transformedPublisher = [1, 2, 3, 4, 5].publisher
    .filter { $0 % 2 == 0 }   // Keep even numbers
    .map { $0 * 10 }          // Multiply by 10
    .collect()                // Collect into an array
\`\`\`

## Managing Subscriptions

Subscriptions need to be stored, or they'll be immediately deallocated, canceling the subscription:

\`\`\`swift
class SubscriptionExample {
    // Store subscriptions as properties
    private var subscription: AnyCancellable?
    
    // Or use a set to store multiple subscriptions
    private var subscriptions = Set<AnyCancellable>()
    
    func setupSubscription() {
        // Single subscription approach
        subscription = publisher.sink { value in
            print(value)
        }
        
        // Multiple subscriptions approach
        publisher
            .sink { value in
                print(value)
            }
            .store(in: &subscriptions)
    }
}
\`\`\`

## Practical Example: Building a Search Feature

Let's build a search feature using Combine to handle user input, debounce rapid typing, and perform network requests:

\`\`\`swift
import Combine
import SwiftUI

class SearchViewModel: ObservableObject {
    // Published properties automatically create publishers
    @Published var searchQuery = ""
    @Published var searchResults: [SearchResult] = []
    @Published var isLoading = false
    @Published var error: Error? = nil
    
    private var subscriptions = Set<AnyCancellable>()
    private let searchService = SearchService()
    
    init() {
        setupSearchSubscription()
    }
    
    private func setupSearchSubscription() {
        // Create a publisher from the searchQuery property
        $searchQuery
            // Wait until typing pauses for 0.5 seconds
            .debounce(for: .milliseconds(500), scheduler: RunLoop.main)
            // Only trigger search when text changes
            .removeDuplicates()
            // Skip empty queries
            .filter { !$0.isEmpty }
            // Show loading state
            .handleEvents(receiveOutput: { [weak self] _ in
                self?.isLoading = true
                self?.error = nil
            })
            // Perform the search
            .flatMap { [weak self] query -> AnyPublisher<[SearchResult], Error> in
                guard let self = self else {
                    return Fail(error: NSError(domain: "SearchViewModel", code: -1)).eraseToAnyPublisher()
                }
                return self.searchService.search(query: query)
            }
            // Process the result on the main thread
            .receive(on: RunLoop.main)
            // Handle the result
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isLoading = false
                    if case .failure(let error) = completion {
                        self?.error = error
                    }
                },
                receiveValue: { [weak self] results in
                    self?.isLoading = false
                    self?.searchResults = results
                }
            )
            .store(in: &subscriptions)
    }
}

// Service that performs the actual search
class SearchService {
    func search(query: String) -> AnyPublisher<[SearchResult], Error> {
        // In a real app, this would be an API call
        return Future<[SearchResult], Error> { promise in
            // Simulate network delay
            DispatchQueue.global().asyncAfter(deadline: .now() + 1.0) {
                // Simulation of search results based on query
                let results = [
                    SearchResult(id: 1, title: "Result 1 for \\(query)"),
                    SearchResult(id: 2, title: "Result 2 for \\(query)"),
                    SearchResult(id: 3, title: "Result 3 for \\(query)")
                ]
                promise(.success(results))
                
                // Simulate error (uncomment to test error handling)
                // promise(.failure(NSError(domain: "SearchService", code: 500)))
            }
        }
        .eraseToAnyPublisher()
    }
}

// Model for search results
struct SearchResult: Identifiable {
    let id: Int
    let title: String
}

// UI implementation with SwiftUI
struct SearchView: View {
    @StateObject private var viewModel = SearchViewModel()
    
    var body: some View {
        VStack {
            TextField("Search", text: $viewModel.searchQuery)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            if viewModel.isLoading {
                ProgressView()
                    .padding()
            } else if let error = viewModel.error {
                Text("Error: \\(error.localizedDescription)")
                    .foregroundColor(.red)
                    .padding()
            } else {
                List(viewModel.searchResults) { result in
                    Text(result.title)
                }
            }
        }
        .padding()
    }
}
\`\`\`

## Handling User Input

The \`@Published\` property wrapper is particularly useful for UI bindings:

\`\`\`swift
class FormViewModel: ObservableObject {
    @Published var username = ""
    @Published var password = ""
    @Published var isLoginEnabled = false
    
    private var subscriptions = Set<AnyCancellable>()
    
    init() {
        // Combine the username and password publishers
        Publishers.CombineLatest($username, $password)
            // Transform to a boolean indicating if form is valid
            .map { username, password in
                return username.count >= 3 && password.count >= 6
            }
            // Update the isLoginEnabled property
            .assign(to: \\FormViewModel.isLoginEnabled, on: self)
            .store(in: &subscriptions)
    }
    
    func login() {
        guard isLoginEnabled else { return }
        // Perform login
    }
}
\`\`\`

## Advanced Combine Techniques

### Custom Publishers

You can create custom publishers to wrap existing asynchronous APIs:

\`\`\`swift
extension URLSession {
    func dataTaskPublisher(for url: URL) -> AnyPublisher<Data, Error> {
        return URLSession.shared.dataTaskPublisher(for: url)
            .map(\\URLSession.DataTaskPublisher.Output.data)
            .mapError { $0 as Error }
            .eraseToAnyPublisher()
    }
}
\`\`\`

### Custom Subscribers

For more control, you can implement custom subscribers:

\`\`\`swift
final class StringSubscriber: Subscriber {
    typealias Input = String
    typealias Failure = Never
    
    func receive(subscription: Subscription) {
        subscription.request(.unlimited)
    }
    
    func receive(_ input: String) -> Subscribers.Demand {
        print("Received string: \(input)")
        return .none
    }
    
    func receive(completion: Subscribers.Completion<Never>) {
        print("Completed with: \(completion)")
    }
}

let publisher = ["A", "B", "C"].publisher
publisher.subscribe(StringSubscriber())
\`\`\`

### Handling Back Pressure

Back pressure is when a subscriber can't process values as fast as they're emitted. Combine provides operators to handle this:

\`\`\`swift
let fastPublisher = Timer.publish(every: 0.1, on: .main, in: .common)
    .autoconnect()

fastPublisher
    // Only process one value every second
    .throttle(for: .seconds(1), scheduler: RunLoop.main, latest: true)
    // Or collect values for a time window
    .collect(.byTime(RunLoop.main, .seconds(1)))
    .sink { values in
        print("Processed batch: \(values)")
    }
    .store(in: &subscriptions)
\`\`\`

## Best Practices for Using Combine

1. **Manage subscriptions properly**:
   - Store them in properties or collections
   - Cancel subscriptions when they're no longer needed

2. **Use type erasure** when exposing publishers to simplify interfaces:
   \`\`\`swift
   // Instead of exposing the complex type
   func complexPublisher() -> Publishers.Map<Publishers.Filter<PassthroughSubject<Int, Never>>, String> {
       // ...
   }
   
   // Erase the type
   func simplePublisher() -> AnyPublisher<String, Never> {
       return complexPublisher().eraseToAnyPublisher()
   }
   \`\`\`

3. **Prefer \`assign(to:on:)\` for simple UI updates** and \`sink\` for more complex handling

4. **Use the appropriate Subject**:
   - \`PassthroughSubject\`: For broadcasting values to subscribers without a current value
   - \`CurrentValueSubject\`: For maintaining a current value that new subscribers receive immediately

5. **Debug with operators** like \`print()\` to log events:
   \`\`\`swift
   publisher
       .print("Debug")
       .sink { _ in }
       .store(in: &subscriptions)
   \`\`\`

## Conclusion

Combine offers a powerful, declarative approach to handling asynchronous events in Swift. By leveraging publishers, subscribers, and operators, you can build reactive applications that respond elegantly to user input, network events, and other asynchronous operations.

As you continue to explore Combine, consider these next steps:
- Integration with SwiftUI for reactive user interfaces
- Combining Combine with async/await in Swift 5.5+
- Error handling strategies for production applications
- Testing Combine code with XCTest
`,
    tags: ["Swift", "Combine", "iOS", "Reactive Programming", "Asynchronous"],
    readTime: 16,
    codeExamples: [
      "import Combine\n\nlet publisher = [1, 2, 3].publisher\n\nlet subscription = publisher\n    .map { $0 * 2 }\n    .sink { value in\n        print(\"Received: \\(value)\")\n    }"
    ],
    relatedTutorials: ["swift-concurrency", "swiftui-basics"]
  }
];

export default tutorials;