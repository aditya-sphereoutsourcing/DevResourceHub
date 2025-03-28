import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { AlignLeft, Clock, Database, Loader, Play, Code, Activity, Share } from "lucide-react";
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../data/constants';

// Define practice problem types
interface PracticeProblem {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  constraints: string;
  exampleInputs: string[];
  exampleOutputs: string[];
  starterCode: Record<string, string>;
  testCases: {
    input: string;
    output: string;
    hidden?: boolean;
  }[];
}

// Sample practice problems
const sampleProblems: PracticeProblem[] = [
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

// Algorithm time complexity options
const timeComplexities = [
  { value: 'O(1)', label: 'O(1) - Constant' },
  { value: 'O(log n)', label: 'O(log n) - Logarithmic' },
  { value: 'O(n)', label: 'O(n) - Linear' },
  { value: 'O(n log n)', label: 'O(n log n) - Linearithmic' },
  { value: 'O(n²)', label: 'O(n²) - Quadratic' },
  { value: 'O(n³)', label: 'O(n³) - Cubic' },
  { value: 'O(2^n)', label: 'O(2^n) - Exponential' },
  { value: 'O(n!)', label: 'O(n!) - Factorial' }
];

// Space complexity options
const spaceComplexities = [
  { value: 'O(1)', label: 'O(1) - Constant' },
  { value: 'O(log n)', label: 'O(log n) - Logarithmic' },
  { value: 'O(n)', label: 'O(n) - Linear' },
  { value: 'O(n²)', label: 'O(n²) - Quadratic' }
];

export default function PracticeGroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>("JavaScript");
  const [selectedProblem, setSelectedProblem] = useState<PracticeProblem | null>(null);
  const [userCode, setUserCode] = useState<string>("");
  const [testResults, setTestResults] = useState<{passed: boolean, message: string}[]>([]);
  const [runningTests, setRunningTests] = useState<boolean>(false);
  const [timeComplexity, setTimeComplexity] = useState<string>("");
  const [spaceComplexity, setSpaceComplexity] = useState<string>("");
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [memoryUsed, setMemoryUsed] = useState<number | null>(null);
  
  // Initialize with the first problem
  useEffect(() => {
    if (sampleProblems.length > 0) {
      setSelectedProblem(sampleProblems[0]);
      setUserCode(sampleProblems[0].starterCode[selectedLanguage] || "");
    }
  }, []);
  
  // Update code when problem or language changes
  useEffect(() => {
    if (selectedProblem) {
      setUserCode(selectedProblem.starterCode[selectedLanguage] || "");
      // Reset test results and performance metrics
      setTestResults([]);
      setExecutionTime(null);
      setMemoryUsed(null);
    }
  }, [selectedProblem, selectedLanguage]);
  
  // Function to simulate running tests
  const runTests = () => {
    setRunningTests(true);
    setTestResults([]);
    
    // Simulate test execution with a delay
    setTimeout(() => {
      if (!selectedProblem) return;
      
      // For demo purposes, we'll use random test results
      const results = selectedProblem.testCases.map(test => {
        const passed = Math.random() > 0.3; // 70% chance of passing a test
        return {
          passed,
          message: passed 
            ? 'Test passed!' 
            : `Expected ${test.output} but got different result`
        };
      });
      
      setTestResults(results);
      setRunningTests(false);
      
      // Simulate execution metrics
      setExecutionTime(Math.floor(Math.random() * 100) + 1); // 1-100ms
      setMemoryUsed(Math.floor(Math.random() * 2000) + 500); // 500-2500KB
    }, 1500);
  };
  
  // Function to generate embed code for API
  const generateEmbedCode = () => {
    return `<iframe 
  src="https://devlibguide.replit.app/practice-embed/${selectedProblem?.id}" 
  width="100%" 
  height="600px" 
  frameborder="0"
></iframe>`;
  };
  
  return (
    <div className="py-10">
      <Helmet>
        <title>Practice Ground | DevLibGuide</title>
        <meta name="description" content="Practice coding, algorithms, and data structures with interactive challenges" />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Practice Ground</h1>
            <p className="text-gray-600 text-lg">
              Sharpen your coding skills with algorithmic challenges and performance analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Problem Selection Sidebar */}
            <div className="col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Coding Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    <label className="text-sm font-medium">Select Language</label>
                    <Select 
                      value={selectedLanguage} 
                      onValueChange={(value) => setSelectedLanguage(value as SupportedLanguage)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        {SUPPORTED_LANGUAGES.map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang.charAt(0).toUpperCase() + lang.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Problems</div>
                    {sampleProblems.map(problem => (
                      <div 
                        key={problem.id}
                        className={`py-2 px-3 border rounded hover:bg-gray-50 cursor-pointer transition-colors ${selectedProblem?.id === problem.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        onClick={() => setSelectedProblem(problem)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{problem.title}</span>
                          <Badge variant={
                            problem.difficulty === 'easy' ? 'default' : 
                            problem.difficulty === 'medium' ? 'secondary' : 'destructive'
                          }>
                            {problem.difficulty}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {problem.category}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Algorithm Analysis Card */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">Algorithm Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium block mb-1">Time Complexity</label>
                      <Select 
                        value={timeComplexity} 
                        onValueChange={setTimeComplexity}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Time Complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeComplexities.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium block mb-1">Space Complexity</label>
                      <Select 
                        value={spaceComplexity} 
                        onValueChange={setSpaceComplexity}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Space Complexity" />
                        </SelectTrigger>
                        <SelectContent>
                          {spaceComplexities.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Metrics Card */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Execution Time</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-xl font-medium">
                          {executionTime !== null ? `${executionTime}ms` : 'N/A'}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Memory Usage</div>
                      <div className="flex items-center">
                        <Database className="h-4 w-4 mr-2 text-green-600" />
                        <span className="text-xl font-medium">
                          {memoryUsed !== null ? `${memoryUsed}KB` : 'N/A'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Coding Area */}
            <div className="col-span-1 lg:col-span-2">
              {selectedProblem && (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{selectedProblem.title}</CardTitle>
                        <div className="flex mt-1 gap-2">
                          <Badge variant={
                            selectedProblem.difficulty === 'easy' ? 'default' : 
                            selectedProblem.difficulty === 'medium' ? 'secondary' : 'destructive'
                          }>
                            {selectedProblem.difficulty}
                          </Badge>
                          <Badge variant="outline">{selectedProblem.category}</Badge>
                        </div>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={runTests}
                        disabled={runningTests}
                      >
                        {runningTests ? (
                          <>
                            <Loader className="h-4 w-4 mr-2 animate-spin" />
                            Running...
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Run Tests
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="description">
                      <TabsList>
                        <TabsTrigger value="description">
                          <AlignLeft className="h-4 w-4 mr-2" />
                          Description
                        </TabsTrigger>
                        <TabsTrigger value="code">
                          <Code className="h-4 w-4 mr-2" />
                          Code
                        </TabsTrigger>
                        <TabsTrigger value="results">
                          <Activity className="h-4 w-4 mr-2" />
                          Results
                        </TabsTrigger>
                        <TabsTrigger value="embed">
                          <Share className="h-4 w-4 mr-2" />
                          Embed
                        </TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="description" className="p-4 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium mb-2">Problem Description</h3>
                          <p className="text-gray-700">{selectedProblem.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Constraints</h3>
                          <p className="text-gray-700 text-sm">{selectedProblem.constraints}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-2">Examples</h3>
                          <div className="space-y-4">
                            {selectedProblem.exampleInputs.map((input, idx) => (
                              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded border">
                                  <div className="text-xs font-medium text-gray-500 mb-1">Input:</div>
                                  <pre className="text-sm whitespace-pre-wrap">{input.replace('\\n', '\n')}</pre>
                                </div>
                                <div className="bg-gray-50 p-3 rounded border">
                                  <div className="text-xs font-medium text-gray-500 mb-1">Output:</div>
                                  <pre className="text-sm whitespace-pre-wrap">{selectedProblem.exampleOutputs[idx]}</pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="code" className="p-4">
                        <div className="mb-4">
                          <div className="flex justify-between items-center">
                            <div className="text-xs font-medium text-gray-500">Coding in: {selectedLanguage}</div>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setUserCode(selectedProblem.starterCode[selectedLanguage] || "")}
                            >
                              Reset Code
                            </Button>
                          </div>
                        </div>
                        
                        <div className="relative h-[400px] border rounded overflow-hidden">
                          <textarea
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                            className="w-full h-full p-4 font-mono text-sm focus:outline-none resize-none"
                            spellCheck="false"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="results" className="p-4">
                        <div className="space-y-4">
                          {testResults.length > 0 ? (
                            <>
                              <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">Test Results</h3>
                                <div>
                                  <Badge variant={
                                    testResults.every(r => r.passed) ? 'default' : 'destructive'
                                  }>
                                    {testResults.filter(r => r.passed).length}/{testResults.length} Passed
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                {testResults.map((result, idx) => (
                                  <div 
                                    key={idx}
                                    className={`p-3 rounded border ${result.passed ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                                  >
                                    <div className="flex justify-between">
                                      <span className={result.passed ? 'text-green-700' : 'text-red-700'}>
                                        Test {idx + 1}
                                      </span>
                                      <span className={result.passed ? 'text-green-700' : 'text-red-700'}>
                                        {result.passed ? 'Passed' : 'Failed'}
                                      </span>
                                    </div>
                                    {!result.passed && (
                                      <div className="text-sm text-red-600 mt-1">{result.message}</div>
                                    )}
                                  </div>
                                ))}
                              </div>
                              
                              <div className="bg-gray-50 p-4 rounded border">
                                <h4 className="text-sm font-medium mb-2">Performance Analysis</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <div className="text-xs text-gray-500">Time Complexity</div>
                                    <div className="font-medium">{timeComplexity || 'Not specified'}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500">Space Complexity</div>
                                    <div className="font-medium">{spaceComplexity || 'Not specified'}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500">Execution Time</div>
                                    <div className="font-medium">{executionTime !== null ? `${executionTime}ms` : 'N/A'}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500">Memory Usage</div>
                                    <div className="font-medium">{memoryUsed !== null ? `${memoryUsed}KB` : 'N/A'}</div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-center py-8">
                              <div className="text-gray-400 mb-2">No test results yet</div>
                              <Button
                                onClick={runTests}
                                disabled={runningTests}
                              >
                                {runningTests ? 'Running Tests...' : 'Run Tests'}
                              </Button>
                            </div>
                          )}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="embed" className="p-4">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-medium mb-2">Embed this Problem</h3>
                            <p className="text-gray-700 text-sm">
                              Copy the code below to embed this coding challenge on your website or blog.
                            </p>
                          </div>
                          
                          <div className="relative">
                            <pre className="bg-gray-50 p-3 rounded border text-sm overflow-x-auto">
                              {generateEmbedCode()}
                            </pre>
                            <Button
                              variant="outline"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => {
                                navigator.clipboard.writeText(generateEmbedCode());
                                // Would add a toast notification in a real app
                              }}
                            >
                              Copy
                            </Button>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-2">API Integration</h3>
                            <p className="text-gray-700 text-sm">
                              You can also integrate with our API to load problems dynamically:
                            </p>
                            <pre className="bg-gray-50 p-3 rounded border text-sm mt-2 overflow-x-auto">
                              {`fetch('https://devlibguide.replit.app/api/problems/${selectedProblem.id}')
  .then(response => response.json())
  .then(data => {
    // Use the problem data
    console.log(data);
  });`}
                            </pre>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}