import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Tag, 
  Search, 
  Filter, 
  ChevronRight, 
  Code
} from "lucide-react";
import { SupportedLanguage } from "@/data/constants";

export default function TutorialsPage() {
  const [location, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [filteredTutorials, setFilteredTutorials] = useState(tutorials);
  
  // Filter tutorials based on search term, language, and difficulty
  useEffect(() => {
    let results = tutorials;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(tutorial => 
        tutorial.title.toLowerCase().includes(term) || 
        tutorial.content.toLowerCase().includes(term) ||
        tutorial.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Filter by language
    if (selectedLanguage !== "all") {
      results = results.filter(tutorial => 
        tutorial.language === selectedLanguage
      );
    }
    
    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      results = results.filter(tutorial => 
        tutorial.difficulty === selectedDifficulty
      );
    }
    
    setFilteredTutorials(results);
  }, [searchTerm, selectedLanguage, selectedDifficulty]);
  
  // Navigate to tutorial detail page
  const navigateToTutorial = (slug: string) => {
    setLocation(`/tutorials/${slug}`);
  };
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get language badge color
  const getLanguageColor = (language: string): string => {
    switch (language) {
      case 'JavaScript':
        return 'bg-yellow-100 text-yellow-800';
      case 'Python':
        return 'bg-blue-100 text-blue-800';
      case 'C++':
        return 'bg-cyan-100 text-cyan-800';
      case 'Rust':
        return 'bg-orange-100 text-orange-800';
      case 'Swift':
        return 'bg-red-100 text-red-800';
      case 'Java':
        return 'bg-pink-100 text-pink-800';
      case 'C':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-indigo-100 text-indigo-800';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutorials & Examples
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and real-world examples to help you master
            programming libraries across multiple languages.
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search tutorials..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="text-sm font-medium text-gray-700">Language:</label>
              <select
                className="flex-grow form-select rounded-md border-gray-300 shadow-sm"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="all">All Languages</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="C++">C++</option>
                <option value="Rust">Rust</option>
                <option value="Swift">Swift</option>
                <option value="Java">Java</option>
                <option value="C">C</option>
              </select>
            </div>
            
            <div className="flex space-x-2 items-center">
              <label className="text-sm font-medium text-gray-700">Difficulty:</label>
              <select
                className="flex-grow form-select rounded-md border-gray-300 shadow-sm"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {filteredTutorials.length} {filteredTutorials.length === 1 ? 'Tutorial' : 'Tutorials'} Found
          </h2>
          
          {filteredTutorials.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTutorials.map((tutorial) => (
                <Card 
                  key={tutorial.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigateToTutorial(tutorial.slug)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex space-x-2 mb-2">
                      <Badge className={getLanguageColor(tutorial.language)}>
                        {tutorial.language}
                      </Badge>
                      <Badge className={getDifficultyColor(tutorial.difficulty)}>
                        {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <BookOpen size={16} className="mr-1" />
                        <span className="mr-3">{tutorial.libraryName}</span>
                        <Clock size={16} className="mr-1" />
                        <span>{tutorial.readTime} min read</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {tutorial.content.split("\n")[0].replace('#', '').trim().substring(0, 120)}...
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2 border-t">
                    <div className="flex flex-wrap gap-1 max-w-[80%]">
                      {tutorial.tags.slice(0, 3).map((tag: string, i: number) => (
                        <Badge variant="outline" key={i} className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {tutorial.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{tutorial.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Read <ChevronRight size={16} />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">No tutorials found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedLanguage("all");
                  setSelectedDifficulty("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Featured Content Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Browse by Category
          </h2>
          
          <Tabs defaultValue="language" className="bg-white rounded-lg shadow-md p-6">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="language">By Language</TabsTrigger>
              <TabsTrigger value="library">By Library</TabsTrigger>
              <TabsTrigger value="topic">By Topic</TabsTrigger>
            </TabsList>
            
            <TabsContent value="language" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['JavaScript', 'Python', 'C++', 'Rust', 'Swift', 'Java', 'C'].map((lang: string) => (
                  <Button
                    key={lang}
                    variant="outline"
                    className="h-20 flex flex-col justify-center"
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setSelectedDifficulty("all");
                      setSearchTerm("");
                    }}
                  >
                    <span className={`w-8 h-8 rounded-full mb-1 ${getLanguageColor(lang)}`}></span>
                    <span>{lang}</span>
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="library" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'NumPy', 'STL', 'tokio', 'Combine', 'Spring', 'math.h'].map((lib: string) => (
                  <Button
                    key={lib}
                    variant="outline"
                    className="h-16"
                    onClick={() => {
                      setSearchTerm(lib);
                      setSelectedLanguage("all");
                      setSelectedDifficulty("all");
                    }}
                  >
                    <Code className="mr-2" size={18} />
                    {lib}
                  </Button>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="topic" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Data Structures', 'Algorithms', 'UI', 'Networking', 'Async', 'Testing', 'Performance', 'Security'].map((topic: string) => (
                  <Button
                    key={topic}
                    variant="outline"
                    className="h-16"
                    onClick={() => {
                      setSearchTerm(topic);
                      setSelectedLanguage("all");
                      setSelectedDifficulty("all");
                    }}
                  >
                    <Tag className="mr-2" size={18} />
                    {topic}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">Want to contribute?</h3>
          <p className="text-blue-700 mb-4">
            Share your knowledge with the community by creating a tutorial or example. 
            Help other developers master programming libraries and boost your profile 
            in the process.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Submit a Tutorial
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}