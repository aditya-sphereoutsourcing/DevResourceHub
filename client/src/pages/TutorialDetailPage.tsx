import React, { useState, useEffect } from "react";
import { useRoute, Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Code, 
  Copy, 
  Check, 
  BookOpen,
  ExternalLink,
  Share2
} from "lucide-react";
import { tutorials } from "@/data/tutorials";
import CodePlayground from "@/components/CodePlayground";

// Simple markdown renderer helper
const renderMarkdown = (content: string): string => {
  // Replace code blocks
  let html = content.replace(/```(.+?)\n([\s\S]*?)```/g, (match, language, code) => {
    return `<div class="bg-gray-800 rounded-md p-4 my-4">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">${language}</span>
                <button class="copy-code-btn text-gray-400 hover:text-white text-xs flex items-center">
                  <span>Copy</span>
                </button>
              </div>
              <pre class="text-gray-200 overflow-x-auto"><code>${code}</code></pre>
            </div>`;
  });
  
  // Replace headings
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>');
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>');
  
  // Replace lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-6 list-decimal mb-1">$1</li>');
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc mb-1">$1</li>');
  
  // Replace paragraphs (only those not already in HTML tags)
  html = html.replace(/^(?!<[a-z]|$)(.+)$/gm, '<p class="mb-4">$1</p>');
  
  // Wrap lists
  html = html.replace(/((?:<li[^>]*>.*<\/li>\n)+)/g, '<ul class="my-4">$1</ul>');
  
  // Replace bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Replace inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-pink-500 rounded px-1 py-0.5">$1</code>');
  
  return html;
};

export default function TutorialDetailPage() {
  const [match, params] = useRoute<{ slug: string }>("/tutorials/:slug");
  const [location, setLocation] = useLocation();
  const [tutorial, setTutorial] = useState<typeof tutorials[0] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showPlayground, setShowPlayground] = useState(false);
  const [relatedTutorials, setRelatedTutorials] = useState<typeof tutorials>([]);
  
  useEffect(() => {
    // Find the tutorial by slug
    if (params?.slug) {
      const foundTutorial = tutorials.find(t => t.slug === params.slug);
      if (foundTutorial) {
        setTutorial(foundTutorial);
        
        // Find related tutorials
        if (foundTutorial.relatedTutorials && foundTutorial.relatedTutorials.length > 0) {
          const related = tutorials.filter(t => 
            // Match by slug references in relatedTutorials
            foundTutorial.relatedTutorials!.includes(t.slug) ||
            // Or by same library or related topics
            (t.id !== foundTutorial.id && 
             (t.libraryName === foundTutorial.libraryName || 
              t.language === foundTutorial.language))
          ).slice(0, 3);
          
          setRelatedTutorials(related);
        }
      } else {
        // Tutorial not found, redirect to tutorials list
        setLocation("/tutorials");
      }
    }
  }, [params?.slug, setLocation]);
  
  // Handle copy code to clipboard
  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty: string) => {
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
  
  if (!tutorial) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tutorial not found
            </h2>
            <Link href="/tutorials">
              <Button className="mt-4">
                <ChevronLeft className="mr-2" size={16} />
                Back to Tutorials
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/tutorials">
            <Button variant="outline" className="mb-6">
              <ChevronLeft className="mr-2" size={16} />
              Back to Tutorials
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className={getLanguageColor(tutorial.language)}>
              {tutorial.language}
            </Badge>
            <Badge className={getDifficultyColor(tutorial.difficulty)}>
              {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <BookOpen size={14} className="mr-1" />
              {tutorial.libraryName}
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {tutorial.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-2 mb-6">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>By {tutorial.author || 'DevLibGuide Team'}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>Published {new Date(tutorial.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{tutorial.readTime} min read</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <Tabs defaultValue="tutorial" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
                    <TabsTrigger value="playground">Code Playground</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tutorial" className="prose prose-slate max-w-none">
                    <div 
                      className="tutorial-content" 
                      dangerouslySetInnerHTML={{ __html: renderMarkdown(tutorial.content) }} 
                    />
                  </TabsContent>
                  
                  <TabsContent value="playground">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Interactive Code Playground</h3>
                      <p className="text-gray-600 mb-6">
                        Try out the code examples from this tutorial in our interactive playground.
                        Modify the code, run it, and see the results in real-time.
                      </p>
                      
                      {tutorial.codeExamples && tutorial.codeExamples.length > 0 ? (
                        <CodePlayground 
                          initialCode={tutorial.codeExamples[0]} 
                          language={tutorial.language as any} 
                          libraryName={tutorial.libraryName} 
                        />
                      ) : (
                        <div className="text-center py-8 bg-gray-100 rounded-lg">
                          <p className="text-gray-600">
                            No interactive examples available for this tutorial.
                          </p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Tags Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Tag size={18} className="mr-2" />
                Related Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {tutorial.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Code Examples Section */}
            {tutorial.codeExamples && tutorial.codeExamples.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Code size={18} className="mr-2" />
                  Code Snippets
                </h3>
                <div className="space-y-4">
                  {tutorial.codeExamples.map((code, index) => (
                    <div key={index} className="bg-gray-800 rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">{tutorial.language}</span>
                        <button 
                          className="text-gray-400 hover:text-white text-xs flex items-center"
                          onClick={() => handleCopyCode(code, index)}
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check size={14} className="mr-1" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} className="mr-1" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-gray-200 overflow-x-auto">
                        <code>{code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Share Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Share2 size={18} className="mr-2" />
                Share This Tutorial
              </h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Related Tutorials */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Related Tutorials</h3>
                {relatedTutorials.length > 0 ? (
                  <div className="space-y-4">
                    {relatedTutorials.map((relatedTutorial) => (
                      <div key={relatedTutorial.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <Link href={`/tutorials/${relatedTutorial.slug}`}>
                          <div className="group cursor-pointer">
                            <div className="flex items-center mb-1">
                              <Badge className={`${getLanguageColor(relatedTutorial.language)} text-xs`}>
                                {relatedTutorial.language}
                              </Badge>
                              <span className="text-xs text-gray-500 ml-2">
                                {relatedTutorial.readTime} min read
                              </span>
                            </div>
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {relatedTutorial.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {relatedTutorial.content.split("\n")[0].replace('#', '').trim().substring(0, 100)}...
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No related tutorials found.
                  </p>
                )}
                
                <Link href="/tutorials">
                  <Button variant="outline" className="w-full mt-4">
                    View All Tutorials
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Library Info */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">About {tutorial.libraryName}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {tutorial.libraryName} is a popular {tutorial.language} library for building {tutorial.tags[0].toLowerCase()} applications.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href={`/#libraries?language=${tutorial.language}&library=${tutorial.libraryName}`} className="flex items-center justify-center">
                    <ExternalLink size={16} className="mr-2" />
                    View Library Details
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            {/* Contribute Card */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Improve This Tutorial</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Found an error or want to contribute to this tutorial? We welcome your feedback and contributions.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" size="sm">
                    Suggest an Edit
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Report an Issue
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Submit a New Tutorial
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}