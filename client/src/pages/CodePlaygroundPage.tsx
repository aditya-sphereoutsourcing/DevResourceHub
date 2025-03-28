import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CodePlayground from "@/components/CodePlayground";
import LibraryExamples from "@/components/LibraryExamples";
import { libraries } from "@/data";
import { Library } from "@/types";
import { allExamples } from "@/data/examples";
import { SupportedLanguage, SUPPORTED_LANGUAGES } from "@/data/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CodePlaygroundPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>("JavaScript");
  const [selectedLibrary, setSelectedLibrary] = useState<string>("");
  const [availableLibraries, setAvailableLibraries] = useState<Library[]>([]);
  const [examples, setExamples] = useState<any[]>([]);
  
  // When language changes, update available libraries
  useEffect(() => {
    const languageKey = selectedLanguage.toLowerCase() as keyof typeof libraries;
    if (libraries[languageKey]) {
      const libs = libraries[languageKey];
      setAvailableLibraries(libs);
      setSelectedLibrary(libs.length > 0 ? libs[0].name : "");
    } else {
      setAvailableLibraries([]);
      setSelectedLibrary("");
    }
  }, [selectedLanguage]);
  
  // When library changes, update examples
  useEffect(() => {
    if (selectedLibrary && allExamples[selectedLibrary]) {
      setExamples(allExamples[selectedLibrary]);
    } else {
      setExamples([]);
    }
  }, [selectedLibrary]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Interactive Code Playground</h1>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <p className="text-gray-600 mb-6">
            Experiment with code examples from your favorite libraries. Select a programming language
            and library to get started, then modify the code and run it to see how it works.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Programming Language
              </label>
              <Select 
                value={selectedLanguage} 
                onValueChange={value => setSelectedLanguage(value as SupportedLanguage)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_LANGUAGES.map(language => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Library
              </label>
              <Select 
                value={selectedLibrary} 
                onValueChange={setSelectedLibrary}
                disabled={availableLibraries.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={availableLibraries.length > 0 ? "Select a library" : "No libraries available"} />
                </SelectTrigger>
                <SelectContent>
                  {availableLibraries.map(library => (
                    <SelectItem key={library.name} value={library.name}>
                      {library.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="playground" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="playground">Code Playground</TabsTrigger>
            <TabsTrigger value="examples" disabled={examples.length === 0}>Examples</TabsTrigger>
          </TabsList>
          
          <TabsContent value="playground" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {selectedLibrary ? (
              <CodePlayground
                language={selectedLanguage}
                libraryName={selectedLibrary}
              />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Please select a programming language and library to start coding.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="examples" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {examples.length > 0 ? (
              <LibraryExamples examples={examples} />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>No examples available for the selected library.</p>
                <p className="mt-2 text-sm">Try selecting a different library or language.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-8">
          <p className="text-blue-700">
            <strong>Tip:</strong> This is a simulated playground. In a real environment, your code would be executed 
            in a secure container with all necessary dependencies pre-installed.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}