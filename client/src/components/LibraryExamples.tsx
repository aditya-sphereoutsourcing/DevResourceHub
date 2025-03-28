import React, { useState } from "react";
import { SupportedLanguage } from "@/data/constants";
import CodePlayground from "./CodePlayground";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export interface Example {
  libraryName: string;
  language: SupportedLanguage;
  title: string;
  description: string;
  code: string;
  author?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface LibraryExamplesProps {
  examples: Example[];
}

export default function LibraryExamples({ examples }: LibraryExamplesProps) {
  const [activeExample, setActiveExample] = useState<Example | null>(examples.length > 0 ? examples[0] : null);
  const [showPlayground, setShowPlayground] = useState(false);

  if (examples.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-700 mb-2">No Examples Available</h3>
        <p className="text-gray-500">
          There are no code examples for this library yet. Check back later or contribute one!
        </p>
      </div>
    );
  }

  // Group examples by difficulty
  const groupedExamples = examples.reduce((acc, example) => {
    if (!acc[example.difficulty]) {
      acc[example.difficulty] = [];
    }
    acc[example.difficulty].push(example);
    return acc;
  }, {} as Record<'beginner' | 'intermediate' | 'advanced', Example[]>);

  const difficultyOrder: ('beginner' | 'intermediate' | 'advanced')[] = ['beginner', 'intermediate', 'advanced'];
  
  const getDifficultyColor = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Code Examples</h2>
        {activeExample && (
          <Button 
            variant="outline" 
            onClick={() => setShowPlayground(!showPlayground)}
          >
            {showPlayground ? "Hide Playground" : "Try in Playground"}
          </Button>
        )}
      </div>

      {showPlayground && activeExample && (
        <div className="mb-6">
          <CodePlayground 
            initialCode={activeExample.code}
            language={activeExample.language}
            libraryName={activeExample.libraryName}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {difficultyOrder.map(difficulty => 
          groupedExamples[difficulty] && groupedExamples[difficulty].map(example => (
            <Card 
              key={`${example.title}-${example.libraryName}`}
              className={`transition-shadow hover:shadow-md cursor-pointer ${
                activeExample?.title === example.title ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveExample(example)}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <Badge className={getDifficultyColor(example.difficulty)}>
                    {example.difficulty.charAt(0).toUpperCase() + example.difficulty.slice(1)}
                  </Badge>
                </div>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-gray-50 rounded p-2 font-mono text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  {example.code.split('\n')[0]}...
                </div>
              </CardContent>
              <CardFooter className="pt-0 text-xs text-gray-500">
                {example.author ? `By ${example.author}` : 'Community Example'}
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}