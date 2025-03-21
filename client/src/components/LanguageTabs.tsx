import { useState } from "react";
import LibraryCard from "./LibraryCard";
import { Library } from "@/types";

interface LanguageTabsProps {
  libraries: {
    c: Library[];
    cpp: Library[];
    java: Library[];
    javascript: Library[];
    python: Library[];
  };
  filteredLibraries: {
    c: Library[];
    cpp: Library[];
    java: Library[];
    javascript: Library[];
    python: Library[];
  };
  activeFilters: boolean;
}

const LanguageTabs = ({ libraries, filteredLibraries, activeFilters }: LanguageTabsProps) => {
  const [activeTab, setActiveTab] = useState<"c" | "cpp" | "java" | "javascript" | "python">("c");

  const handleTabClick = (tab: "c" | "cpp" | "java" | "javascript" | "python") => {
    setActiveTab(tab);
  };

  // Display filtered libraries if filters are active, otherwise show all
  const displayLibraries = activeFilters ? filteredLibraries : libraries;

  return (
    <section id="languages" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Library Resources by Language
        </h2>

        {/* Language Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex overflow-x-auto">
              <button
                onClick={() => handleTabClick("c")}
                className={`language-tab whitespace-nowrap py-3 px-6 border-b-2 font-medium ${
                  activeTab === "c"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                C
              </button>
              <button
                onClick={() => handleTabClick("cpp")}
                className={`language-tab whitespace-nowrap py-3 px-6 border-b-2 font-medium ${
                  activeTab === "cpp"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                C++
              </button>
              <button
                onClick={() => handleTabClick("java")}
                className={`language-tab whitespace-nowrap py-3 px-6 border-b-2 font-medium ${
                  activeTab === "java"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Java
              </button>
              <button
                onClick={() => handleTabClick("javascript")}
                className={`language-tab whitespace-nowrap py-3 px-6 border-b-2 font-medium ${
                  activeTab === "javascript"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                JavaScript
              </button>
              <button
                onClick={() => handleTabClick("python")}
                className={`language-tab whitespace-nowrap py-3 px-6 border-b-2 font-medium ${
                  activeTab === "python"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Python
              </button>
            </nav>
          </div>
        </div>

        {/* C Language Content */}
        <div className={activeTab === "c" ? "" : "hidden"}>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">C Programming Language</h3>
            <p className="text-gray-600 mb-6">
              C is a general-purpose programming language that is extremely popular, simple, and flexible. It is a structured programming language that is machine-independent and extensively used to write various applications, operating systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Systems Programming</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Embedded Systems</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Game Development</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Desktop Applications</div>
            </div>
          </div>

          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayLibraries.c.length > 0 ? (
              displayLibraries.c.map((library, index) => (
                <LibraryCard key={index} library={library} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No libraries found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* C++ Language Content */}
        <div className={activeTab === "cpp" ? "" : "hidden"}>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">C++ Programming Language</h3>
            <p className="text-gray-600 mb-6">
              C++ is a powerful general-purpose programming language that extends C with object-oriented features. It's used for systems programming, game development, resource-constrained applications, and performance-critical software.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Object-Oriented</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">High Performance</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Game Development</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Systems Programming</div>
            </div>
          </div>

          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayLibraries.cpp.length > 0 ? (
              displayLibraries.cpp.map((library, index) => (
                <LibraryCard key={index} library={library} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No libraries found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Java Language Content */}
        <div className={activeTab === "java" ? "" : "hidden"}>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Java Programming Language</h3>
            <p className="text-gray-600 mb-6">
              Java is a versatile, object-oriented language known for its "write once, run anywhere" capability. It's widely used for web applications, enterprise software, mobile apps (Android), and large system development.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Enterprise</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Cross-Platform</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Web Development</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Android</div>
            </div>
          </div>

          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayLibraries.java.length > 0 ? (
              displayLibraries.java.map((library, index) => (
                <LibraryCard key={index} library={library} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No libraries found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* JavaScript Language Content */}
        <div className={activeTab === "javascript" ? "" : "hidden"}>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">JavaScript Programming Language</h3>
            <p className="text-gray-600 mb-6">
              JavaScript is a versatile programming language primarily known for creating interactive effects within web browsers. With the advent of Node.js, JavaScript has expanded to server-side development, making it a full-stack language for web applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Frontend</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Backend</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Web Development</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full Stack</div>
            </div>
          </div>

          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayLibraries.javascript.length > 0 ? (
              displayLibraries.javascript.map((library, index) => (
                <LibraryCard key={index} library={library} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No libraries found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Python Language Content */}
        <div className={activeTab === "python" ? "" : "hidden"}>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Python Programming Language</h3>
            <p className="text-gray-600 mb-6">
              Python is a high-level, interpreted programming language known for its readability and simplicity. It supports multiple programming paradigms including procedural, object-oriented, and functional programming. Python is widely used in data science, machine learning, web development, automation, and scientific computing.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Data Science</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Machine Learning</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Web Development</div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Automation</div>
            </div>
          </div>

          {/* Library Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayLibraries.python.length > 0 ? (
              displayLibraries.python.map((library, index) => (
                <LibraryCard key={index} library={library} />
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p className="text-gray-500">No libraries found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageTabs;
