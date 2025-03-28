import { useState } from "react";
import { ExternalLinkIcon, Code, ChevronDown, ChevronUp } from "lucide-react";
import { Library } from "@/types";
import LibraryExamples from "./LibraryExamples";
import { allExamples } from "@/data/examples";
import { Button } from "./ui/button";

interface LibraryCardProps {
  library: Library;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
  const [showExamples, setShowExamples] = useState(false);
  
  // Check if we have examples for this library
  const hasExamples = allExamples[library.name] !== undefined;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-semibold text-gray-800">{library.name}</h4>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            v{library.version}
          </span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{library.description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2 mb-3">
            {library.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              {library.compatibility}
            </div>
            <div className="flex space-x-2">
              {hasExamples && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  onClick={() => setShowExamples(!showExamples)}
                >
                  <Code className="h-4 w-4 mr-1" />
                  Examples
                  {showExamples ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Button>
              )}
              <a 
                href={library.documentationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                <ExternalLinkIcon className="h-4 w-4 mr-1" />
                Docs
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Examples section (collapsible) */}
      {showExamples && hasExamples && (
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          <LibraryExamples examples={allExamples[library.name]} />
        </div>
      )}
    </div>
  );
};

export default LibraryCard;
