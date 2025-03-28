import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Sample problems data that would normally come from a database
const sampleProblems = [
  {
    id: "two-sum",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    difficulty: "easy",
    category: "arrays",
    constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9, -10^9 <= target <= 10^9",
    exampleInputs: ["[2,7,11,15]\\n9", "[3,2,4]\\n6", "[3,3]\\n6"],
    exampleOutputs: ["[0,1]", "[1,2]", "[0,1]"],
    starterCode: {
      JavaScript: `function twoSum(nums, target) {
  // Write your code here
  
};`,
      Python: `def two_sum(nums, target):
    # Write your code here
    
    pass`,
      Java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        
    }
}`,
      "C++": `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        
    }
};`,
      Rust: `pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    // Write your code here
    
}`
    },
    testCases: [
      {
        input: "[2,7,11,15]\\n9",
        output: "[0,1]"
      },
      {
        input: "[3,2,4]\\n6",
        output: "[1,2]"
      },
      {
        input: "[3,3]\\n6",
        output: "[0,1]"
      },
      {
        input: "[1,2,3,4,5]\\n9",
        output: "[3,4]",
        hidden: true
      }
    ]
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description: "Write a function that reverses a string. The input string is given as an array of characters. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.",
    difficulty: "easy",
    category: "strings",
    constraints: "1 <= s.length <= 10^5, s[i] is a printable ascii character",
    exampleInputs: ['["h","e","l","l","o"]', '["H","a","n","n","a","h"]'],
    exampleOutputs: ['["o","l","l","e","h"]', '["h","a","n","n","a","H"]'],
    starterCode: {
      JavaScript: `function reverseString(s) {
  // Write your code here
  
};`,
      Python: `def reverse_string(s):
    # Write your code here
    
    pass`,
      Java: `class Solution {
    public void reverseString(char[] s) {
        // Write your code here
        
    }
}`,
      "C++": `class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your code here
        
    }
};`,
      Rust: `pub fn reverse_string(s: &mut Vec<char>) {
    // Write your code here
    
}`
    },
    testCases: [
      {
        input: '["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]'
      },
      {
        input: '["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]'
      }
    ]
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: open brackets must be closed by the same type of brackets, and open brackets must be closed in the correct order.",
    difficulty: "easy",
    category: "stacks",
    constraints: "1 <= s.length <= 10^4, s consists of parentheses only '()[]{}'",
    exampleInputs: ['()', '()[]{}', '(]', '([)]', '{[]}'],
    exampleOutputs: ['true', 'true', 'false', 'false', 'true'],
    starterCode: {
      JavaScript: `function isValid(s) {
  // Write your code here
  
};`,
      Python: `def is_valid(s):
    # Write your code here
    
    pass`,
      Java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
        
    }
}`,
      "C++": `class Solution {
public:
    bool isValid(string s) {
        // Write your code here
        
    }
};`,
      Rust: `pub fn is_valid(s: String) -> bool {
    // Write your code here
    
}`
    },
    testCases: [
      {
        input: '()',
        output: 'true'
      },
      {
        input: '()[]{}',
        output: 'true'
      },
      {
        input: '(]',
        output: 'false'
      },
      {
        input: '([)]',
        output: 'false'
      },
      {
        input: '{[]}',
        output: 'true'
      }
    ]
  }
];

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // GET all libraries
  app.get(`${apiPrefix}/libraries`, async (_req, res) => {
    try {
      // In a real implementation, this would fetch from a database
      // For this static site example, we'll return an empty success response
      res.status(200).json({ message: "Success" });
    } catch (error) {
      console.error("Error fetching libraries:", error);
      res.status(500).json({ message: "Error fetching libraries" });
    }
  });

  // GET library examples and integration patterns
  app.get(`${apiPrefix}/libraries/:name/examples`, async (req, res) => {
    try {
      const { name } = req.params;
      res.status(200).json({ message: "Success", examples: [] });
    } catch (error) {
      res.status(500).json({ message: "Error fetching examples" });
    }
  });

  // GET library version history
  app.get(`${apiPrefix}/libraries/:name/versions`, async (req, res) => {
    try {
      const { name } = req.params;
      res.status(200).json({ message: "Success", versions: [] });
    } catch (error) {
      res.status(500).json({ message: "Error fetching versions" });
    }
  });

  // GET library analytics
  app.get(`${apiPrefix}/libraries/:name/analytics`, async (req, res) => {
    try {
      const { name } = req.params;
      res.status(200).json({ message: "Success", analytics: {} });
    } catch (error) {
      res.status(500).json({ message: "Error fetching analytics" });
    }
  });

  // GET library health metrics
  app.get(`${apiPrefix}/libraries/:name/health`, async (req, res) => {
    try {
      const { name } = req.params;
      res.status(200).json({ message: "Success", health: {} });
    } catch (error) {
      res.status(500).json({ message: "Error fetching health metrics" });
    }
  });

  // GET libraries by language
  app.get(`${apiPrefix}/libraries/:language`, async (req, res) => {
    try {
      const { language } = req.params;
      // In a real implementation, this would filter libraries by language
      // For this static site example, we'll return an empty success response
      res.status(200).json({ message: "Success", language });
    } catch (error) {
      console.error(`Error fetching ${req.params.language} libraries:`, error);
      res.status(500).json({ message: `Error fetching ${req.params.language} libraries` });
    }
  });
  
  // Practice Ground API endpoints
  
  // GET all practice problems
  app.get(`${apiPrefix}/problems`, async (_req, res) => {
    try {
      // Return a list of problems with minimal info
      const problemsList = sampleProblems.map(problem => ({
        id: problem.id,
        title: problem.title,
        difficulty: problem.difficulty,
        category: problem.category
      }));
      
      res.status(200).json({ problems: problemsList });
    } catch (error) {
      console.error("Error fetching problems:", error);
      res.status(500).json({ message: "Error fetching practice problems" });
    }
  });
  
  // GET a specific problem by ID
  app.get(`${apiPrefix}/problems/:id`, async (req, res) => {
    try {
      const { id } = req.params;
      const problem = sampleProblems.find(p => p.id === id);
      
      if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
      }
      
      res.status(200).json(problem);
    } catch (error) {
      console.error("Error fetching problem:", error);
      res.status(500).json({ message: "Error fetching practice problem" });
    }
  });
  
  // POST validate a solution (simulate)
  app.post(`${apiPrefix}/problems/:id/validate`, async (req, res) => {
    try {
      const { id } = req.params;
      const { code, language } = req.body;
      
      if (!code || !language) {
        return res.status(400).json({ error: "Missing code or language parameter" });
      }
      
      const problem = sampleProblems.find(p => p.id === id);
      
      if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
      }
      
      // Simulate test execution with random results (in a real app, we'd actually run tests)
      const results = problem.testCases.map(test => {
        const passed = Math.random() > 0.3; // 70% chance of passing
        return {
          passed,
          message: passed ? 'Test passed!' : `Expected ${test.output} but got different result`,
          input: test.input,
          expectedOutput: test.output,
          hidden: test.hidden || false
        };
      });
      
      // Calculate performance metrics (simulated)
      const executionTime = Math.floor(Math.random() * 100) + 1; // 1-100ms
      const memoryUsed = Math.floor(Math.random() * 2000) + 500; // 500-2500KB
      
      res.status(200).json({
        results,
        metrics: {
          executionTime,
          memoryUsed
        }
      });
    } catch (error) {
      console.error("Error validating solution:", error);
      res.status(500).json({ message: "Error validating solution" });
    }
  });
  
  // GET embed information
  app.get(`${apiPrefix}/embed-info`, async (_req, res) => {
    try {
      res.status(200).json({
        baseUrl: "https://devlibguide.replit.app",
        embedInstructions: "To embed a problem, use the following HTML code:",
        embedCode: '<iframe src="https://devlibguide.replit.app/practice-embed/PROBLEM_ID" width="100%" height="600px" frameborder="0"></iframe>',
        availableProblems: sampleProblems.map(p => ({ id: p.id, title: p.title }))
      });
    } catch (error) {
      console.error("Error fetching embed info:", error);
      res.status(500).json({ message: "Error fetching embed information" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
