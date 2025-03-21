import { useState } from "react";
import { Library } from "@/types";
import { SUPPORTED_LANGUAGES } from "@/data/constants";

interface LibraryTrackerProps {
  libraries: {
    c: Library[];
    cpp: Library[];
    java: Library[];
    javascript: Library[];
    python: Library[];
  };
}

const LibraryTracker = ({ libraries }: LibraryTrackerProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("c");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Common libraries that every language should have (just examples)
  const commonLibrariesToTrack: Record<string, string[]> = {
    c: ["stdio.h", "stdlib.h", "string.h", "math.h", "time.h", "assert.h", "ctype.h", "errno.h", "locale.h", "setjmp.h", "signal.h"],
    cpp: ["iostream", "vector", "string", "algorithm", "map", "set", "queue", "stack", "list", "memory"],
    java: ["java.util", "java.io", "java.lang", "java.math", "java.net", "java.time", "java.text", "java.sql", "java.security"],
    javascript: ["react", "vue", "angular", "express", "lodash", "axios", "jquery", "moment", "redux", "d3"],
    python: ["numpy", "pandas", "matplotlib", "scikit-learn", "tensorflow", "django", "flask", "requests", "beautifulsoup4", "sqlalchemy"]
  };

  // Get the list for the selected language
  const librariesToTrack = commonLibrariesToTrack[selectedLanguage] || [];
  const addedLibraries = libraries[selectedLanguage as keyof typeof libraries].map(lib => lib.name.toLowerCase());
  
  // Filter libraries by search term
  const filteredLibrariesToTrack = librariesToTrack.filter((lib: string) => 
    lib.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Library Tracking</h3>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Language
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search Libraries
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <h4 className="font-medium text-gray-700">Common Libraries to Track:</h4>
          <span className="text-sm text-gray-500">
            {addedLibraries.length} of {librariesToTrack.length} libraries added
          </span>
        </div>
        
        <div className="border rounded-md p-4 max-h-64 overflow-y-auto">
          {filteredLibrariesToTrack.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredLibrariesToTrack.map((lib: string) => {
                const isAdded = addedLibraries.includes(lib.toLowerCase());
                return (
                  <li key={lib} className="py-2 flex items-center justify-between">
                    <span className="text-gray-800">{lib}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      isAdded 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {isAdded ? 'Added' : 'Needed'}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-center text-gray-500 py-4">No libraries match your search.</p>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p className="mb-2">
          <span className="inline-block w-3 h-3 bg-green-100 border border-green-800 rounded-full mr-2"></span>
          <span className="font-medium">Green</span>: Library has been added to the database
        </p>
        <p>
          <span className="inline-block w-3 h-3 bg-yellow-100 border border-yellow-800 rounded-full mr-2"></span>
          <span className="font-medium">Yellow</span>: Library needs to be added to the database
        </p>
      </div>
    </div>
  );
};

export default LibraryTracker;