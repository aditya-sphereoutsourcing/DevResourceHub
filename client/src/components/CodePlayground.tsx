import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupportedLanguage } from "@/data/constants";

interface CodePlaygroundProps {
  initialCode?: string;
  language: SupportedLanguage;
  libraryName: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode = "",
  language,
  libraryName,
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "output">("code");

  // Example templates for different languages
  const getLanguageTemplate = (lang: SupportedLanguage, lib: string): string => {
    switch (lang.toLowerCase()) {
      case "javascript":
        return `// Example code using ${lib}
const example = () => {
  // Try modifying this code
  console.log("Testing ${lib}");
  
  // Your code here
};

example();`;
      case "python":
        return `# Example code using ${lib}
def example():
    # Try modifying this code
    print("Testing ${lib}")
    
    # Your code here

example()`;
      case "c":
        return `// Example code using ${lib}
#include <stdio.h>

int main() {
    // Try modifying this code
    printf("Testing ${lib}\\n");
    
    // Your code here
    return 0;
}`;
      case "c++":
        return `// Example code using ${lib}
#include <iostream>

int main() {
    // Try modifying this code
    std::cout << "Testing ${lib}" << std::endl;
    
    // Your code here
    return 0;
}`;
      case "java":
        return `// Example code using ${lib}
public class Example {
    public static void main(String[] args) {
        // Try modifying this code
        System.out.println("Testing ${lib}");
        
        // Your code here
    }
}`;
      case "rust":
        return `// Example code using ${lib}
fn main() {
    // Try modifying this code
    println!("Testing ${lib}");
    
    // Your code here
}`;
      case "swift":
        return `// Example code using ${lib}
import Foundation

func example() {
    // Try modifying this code
    print("Testing ${lib}")
    
    // Your code here
}

example()`;
      default:
        return `// Example code\nconsole.log("Hello from ${lib}");`;
    }
  };

  useEffect(() => {
    if (!initialCode) {
      setCode(getLanguageTemplate(language, libraryName));
    }
  }, [language, libraryName, initialCode]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const runCode = () => {
    setIsRunning(true);
    setActiveTab("output");
    
    // In a real implementation, this would send the code to a backend service
    // For now, we'll simulate running the code
    setTimeout(() => {
      const simulatedOutput = `Running ${language} code for ${libraryName}...
> ${code.split('\n')[0]}
> Output: Code executed successfully!`;
      
      setOutput(simulatedOutput);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="border rounded-lg shadow-sm bg-white">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-medium">
            {libraryName} Code Playground ({language})
          </h3>
          <Button 
            onClick={runCode} 
            disabled={isRunning}
            className="bg-green-600 hover:bg-green-700"
          >
            {isRunning ? "Running..." : "Run Code"}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="code" value={activeTab} onValueChange={(value) => setActiveTab(value as "code" | "output")}>
        <div className="border-b px-4">
          <TabsList className="bg-transparent border-b-0">
            <TabsTrigger value="code" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="output" className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-blue-500">
              Output
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="code" className="p-0 mt-0">
          <div className="p-4 bg-gray-50 rounded-b-lg min-h-[300px]">
            <textarea
              className="w-full h-64 p-4 font-mono text-sm bg-gray-800 text-white rounded border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={code}
              onChange={handleCodeChange}
              placeholder={`Write your ${language} code here...`}
              spellCheck="false"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="p-0 mt-0">
          <div className="p-4 bg-gray-50 rounded-b-lg min-h-[300px]">
            <div className="w-full h-64 p-4 font-mono text-sm bg-gray-800 text-white rounded overflow-auto">
              {output ? (
                <pre>{output}</pre>
              ) : (
                <div className="text-gray-500 italic">
                  Run your code to see output here
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="p-3 bg-gray-50 text-xs text-gray-500 rounded-b-lg border-t">
        <p>
          Note: This is a simulated playground. In a full implementation, code would be executed in a secure sandbox environment.
        </p>
      </div>
    </div>
  );
};

export default CodePlayground;