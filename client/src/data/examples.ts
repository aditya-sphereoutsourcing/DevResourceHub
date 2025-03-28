import { Example } from "@/components/LibraryExamples";

/**
 * Library Code Examples
 * 
 * This file contains example code snippets for various libraries
 * Each example includes:
 * - Title and description
 * - Code snippet
 * - Difficulty level
 * - Author attribution (optional)
 */

// JavaScript Examples
export const reactExamples: Example[] = [
  {
    libraryName: "React",
    language: "JavaScript",
    title: "Simple Counter Component",
    description: "A basic React counter component using useState hook",
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`,
    difficulty: "beginner"
  },
  {
    libraryName: "React",
    language: "JavaScript",
    title: "Data Fetching with useEffect",
    description: "Fetching and displaying data from an API using React hooks",
    code: `import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    }
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;`,
    difficulty: "intermediate",
    author: "John Doe"
  }
];

// Python Examples 
export const numpyExamples: Example[] = [
  {
    libraryName: "NumPy",
    language: "Python",
    title: "Basic Array Operations",
    description: "Creating and manipulating arrays with NumPy",
    code: `import numpy as np

# Create arrays
arr1 = np.array([1, 2, 3, 4, 5])
arr2 = np.array([6, 7, 8, 9, 10])

# Basic operations
print("Array 1:", arr1)
print("Array 2:", arr2)
print("Sum:", arr1 + arr2)
print("Difference:", arr2 - arr1)
print("Product:", arr1 * arr2)
print("Quotient:", arr2 / arr1)

# Array statistics
print("Mean of array 1:", np.mean(arr1))
print("Max of array 2:", np.max(arr2))
print("Sum of all elements:", np.sum(arr1) + np.sum(arr2))`,
    difficulty: "beginner"
  },
  {
    libraryName: "NumPy",
    language: "Python",
    title: "Data Analysis with NumPy",
    description: "Analyzing a dataset using NumPy's statistical functions",
    code: `import numpy as np

# Create a sample dataset (e.g., daily temperatures for a month)
temperatures = np.array([
    [25, 28, 30, 32, 33, 31, 29],  # Week 1
    [22, 23, 25, 27, 28, 30, 31],  # Week 2
    [24, 22, 23, 25, 28, 31, 32],  # Week 3
    [31, 30, 29, 27, 25, 24, 23]   # Week 4
])

# Analysis
print("Dataset shape:", temperatures.shape)
print("Daily average:", np.mean(temperatures, axis=0))  # Average by column (day)
print("Weekly average:", np.mean(temperatures, axis=1))  # Average by row (week)
print("Overall average:", np.mean(temperatures))
print("Highest temperature:", np.max(temperatures))
print("Lowest temperature:", np.min(temperatures))
print("Temperature range:", np.ptp(temperatures))  # Peak to peak (max-min)

# Find the hottest day (index of max value)
max_index = np.unravel_index(np.argmax(temperatures), temperatures.shape)
print(f"Hottest day was in week {max_index[0] + 1}, day {max_index[1] + 1}")`,
    difficulty: "intermediate"
  }
];

// Rust Examples
export const tokioExamples: Example[] = [
  {
    libraryName: "tokio",
    language: "Rust",
    title: "Basic Async Function",
    description: "Creating a simple asynchronous function with tokio",
    code: `use tokio::time::{sleep, Duration};

async fn async_function() {
    println!("Starting async function");
    sleep(Duration::from_millis(1000)).await;
    println!("Async function completed after 1 second");
}

#[tokio::main]
async fn main() {
    println!("Program started");
    
    // Call the async function
    async_function().await;
    
    println!("Program completed");
}`,
    difficulty: "beginner"
  },
  {
    libraryName: "tokio",
    language: "Rust",
    title: "Concurrent Tasks with tokio",
    description: "Running multiple tasks concurrently using tokio's spawning capabilities",
    code: `use tokio::time::{sleep, Duration};
use std::sync::Arc;
use tokio::sync::Mutex;

async fn task(id: usize, counter: Arc<Mutex<i32>>) {
    println!("Task {} starting", id);
    
    // Simulate some async work
    sleep(Duration::from_millis(1000)).await;
    
    // Update shared counter
    let mut lock = counter.lock().await;
    *lock += 1;
    
    println!("Task {} completed, counter now {}", id, *lock);
}

#[tokio::main]
async fn main() {
    let counter = Arc::new(Mutex::new(0));
    
    // Create a vector to hold our join handles
    let mut handles = vec![];
    
    // Spawn multiple tasks
    for i in 0..5 {
        let counter_clone = Arc::clone(&counter);
        let handle = tokio::spawn(async move {
            task(i, counter_clone).await;
        });
        handles.push(handle);
    }
    
    // Wait for all tasks to complete
    for handle in handles {
        handle.await.unwrap();
    }
    
    println!("All tasks completed!");
}`,
    difficulty: "intermediate",
    author: "Rust Developer"
  }
];

// C++ Examples
export const cppStlExamples: Example[] = [
  {
    libraryName: "C++ STL",
    language: "C++",
    title: "Vector Operations",
    description: "Basic operations using C++ Standard Template Library vectors",
    code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // Create a vector
    std::vector<int> numbers = {5, 2, 8, 1, 9, 3};
    
    // Print original vector
    std::cout << "Original vector: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Sort the vector
    std::sort(numbers.begin(), numbers.end());
    
    // Print sorted vector
    std::cout << "Sorted vector: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Find a value
    int valueToFind = 8;
    auto it = std::find(numbers.begin(), numbers.end(), valueToFind);
    if (it != numbers.end()) {
        std::cout << "Found " << valueToFind << " at position: " 
                  << (it - numbers.begin()) << std::endl;
    } else {
        std::cout << valueToFind << " not found" << std::endl;
    }
    
    // Add and remove elements
    numbers.push_back(10);
    numbers.pop_back();
    
    // Get vector size
    std::cout << "Vector size: " << numbers.size() << std::endl;
    
    return 0;
}`,
    difficulty: "beginner"
  }
];

// Swift Examples
export const swiftUIExamples: Example[] = [
  {
    libraryName: "SwiftUI",
    language: "Swift",
    title: "Simple List View",
    description: "Creating a basic list view with SwiftUI",
    code: `import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry", "Date", "Fig", "Grape"]
    
    var body: some View {
        NavigationView {
            List(items, id: \\.self) { item in
                Text(item)
            }
            .navigationTitle("Fruit List")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}`,
    difficulty: "beginner"
  },
  {
    libraryName: "SwiftUI",
    language: "Swift",
    title: "Form with State Management",
    description: "Creating a form with state management in SwiftUI",
    code: `import SwiftUI

struct UserProfile: View {
    @State private var name: String = ""
    @State private var email: String = ""
    @State private var notificationsEnabled: Bool = false
    @State private var submitted: Bool = false
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Personal Information")) {
                    TextField("Name", text: $name)
                    TextField("Email", text: $email)
                        .keyboardType(.emailAddress)
                        .autocapitalization(.none)
                }
                
                Section {
                    Toggle("Enable Notifications", isOn: $notificationsEnabled)
                }
                
                Section {
                    Button("Submit") {
                        // Validate and submit form
                        if !name.isEmpty && !email.isEmpty {
                            submitted = true
                        }
                    }
                }
                
                if submitted {
                    Section {
                        Text("Profile Updated!")
                            .foregroundColor(.green)
                    }
                }
            }
            .navigationTitle("User Profile")
        }
    }
}

struct UserProfile_Previews: PreviewProvider {
    static var previews: some View {
        UserProfile()
    }
}`,
    difficulty: "intermediate",
    author: "iOS Developer"
  }
];

// All examples combined for easy access
export const allExamples: Record<string, Example[]> = {
  "React": reactExamples,
  "NumPy": numpyExamples,
  "tokio": tokioExamples,
  "C++ STL": cppStlExamples,
  "SwiftUI": swiftUIExamples
};