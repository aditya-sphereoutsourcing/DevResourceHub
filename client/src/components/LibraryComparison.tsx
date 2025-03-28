import { useState } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BarChart, LineChart, BarChartHorizontal } from "../components/ui/chart";
import { Library } from '../types';
import { SupportedLanguage, SUPPORTED_LANGUAGES } from '../data/constants';

interface LibraryComparisonProps {
  libraries: {
    [key: string]: Library[];
  };
}

export default function LibraryComparison({ libraries }: LibraryComparisonProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("javascript");
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([]);
  const [comparisonMetric, setComparisonMetric] = useState<'tags' | 'features'>('tags');
  
  // Allow selecting up to 3 libraries for comparison
  const handleSelectLibrary = (libraryName: string) => {
    if (selectedLibraries.includes(libraryName)) {
      setSelectedLibraries(selectedLibraries.filter(lib => lib !== libraryName));
    } else if (selectedLibraries.length < 3) {
      setSelectedLibraries([...selectedLibraries, libraryName]);
    }
  };
  
  // Get all unique tags from the selected libraries
  const getAllTags = () => {
    const tags = new Set<string>();
    selectedLibraries.forEach(libName => {
      const library = libraries[selectedLanguage].find(lib => lib.name === libName);
      if (library) {
        library.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  };
  
  // Count how many selected libraries have each tag
  const getTagCounts = () => {
    const allTags = getAllTags();
    return allTags.map(tag => {
      const count = selectedLibraries.reduce((acc, libName) => {
        const library = libraries[selectedLanguage].find(lib => lib.name === libName);
        return library && library.tags.includes(tag) ? acc + 1 : acc;
      }, 0);
      return { tag, count };
    }).sort((a, b) => b.count - a.count);
  };
  
  // Data for tag comparison chart
  const getTagComparisonData = () => {
    return getTagCounts().map(({ tag, count }) => ({
      name: tag,
      value: count,
    }));
  };
  
  const renderLibrarySelector = () => (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="w-full md:w-64">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Programming Language
          </label>
          <Select 
            value={selectedLanguage} 
            onValueChange={(value) => {
              setSelectedLanguage(value as SupportedLanguage);
              setSelectedLibraries([]);
            }}
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
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Selected Libraries ({selectedLibraries.length}/3)
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedLibraries.map(lib => (
              <Button 
                key={lib}
                variant="outline" 
                size="sm"
                onClick={() => handleSelectLibrary(lib)}
                className="bg-blue-50 border-blue-200 text-blue-700"
              >
                {lib} ✕
              </Button>
            ))}
            {selectedLibraries.length === 0 && (
              <p className="text-sm text-gray-500 italic">No libraries selected</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md border border-gray-200 max-h-72 overflow-y-auto">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Select up to 3 libraries to compare:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {libraries[selectedLanguage]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(library => (
                <Button
                  key={library.name}
                  variant={selectedLibraries.includes(library.name) ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleSelectLibrary(library.name)}
                  disabled={selectedLibraries.length >= 3 && !selectedLibraries.includes(library.name)}
                  className="justify-start overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {library.name}
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderComparison = () => {
    if (selectedLibraries.length === 0) {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <p className="text-gray-500">Select libraries to compare them</p>
        </div>
      );
    }
    
    if (selectedLibraries.length === 1) {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-md p-8 text-center">
          <p className="text-gray-500">Select at least one more library to compare</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-8">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="features" onClick={() => setComparisonMetric('features')}>Feature Comparison</TabsTrigger>
            <TabsTrigger value="tags" onClick={() => setComparisonMetric('tags')}>Tag Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Feature Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChartHorizontal
                    data={getTagComparisonData()}
                    index="name"
                    categories={['value']}
                    colors={['blue']}
                    valueFormatter={(value: number) => `${value} ${value === 1 ? 'library' : 'libraries'}`}
                    yAxisWidth={150}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tags" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Tag Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <BarChart
                    data={getTagComparisonData()}
                    index="name"
                    categories={['value']}
                    colors={['blue']}
                    valueFormatter={(value: number) => `${value}`}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedLibraries.map(libName => {
            const library = libraries[selectedLanguage].find(lib => lib.name === libName);
            if (!library) return null;
            
            return (
              <Card key={library.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{library.name}</CardTitle>
                  <div className="text-xs text-gray-500">v{library.version}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-3">{library.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {library.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={library.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    View Documentation
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Library Comparison Tool</h2>
        <p className="text-gray-600">Compare features and characteristics of different libraries</p>
      </div>
      
      {renderLibrarySelector()}
      
      <div className="mt-8">
        {renderComparison()}
      </div>
    </div>
  );
}