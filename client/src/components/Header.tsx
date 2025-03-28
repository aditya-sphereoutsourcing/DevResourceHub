import { useState } from "react";
import { Link } from "wouter";
import { CodeIcon, Code, BarChart } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <CodeIcon className="h-8 w-8 text-blue-700" />
            <h1 className="text-xl font-semibold text-gray-800">DevLibGuide</h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium">
            Home
          </Link>
          <Link href="/#languages" className="text-gray-700 hover:text-blue-700 font-medium">
            Languages
          </Link>
          <Link href="/playground" className="text-gray-700 hover:text-blue-700 font-medium flex items-center">
            <Code className="h-5 w-5 mr-1" />
            Code Playground
          </Link>
          <Link href="/compare" className="text-gray-700 hover:text-blue-700 font-medium flex items-center">
            <BarChart className="h-5 w-5 mr-1" />
            Compare
          </Link>
          <Link href="/#contribute" className="text-gray-700 hover:text-blue-700 font-medium">
            Contribute
          </Link>
          <a
            href="https://github.com/devlibguide/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white border-t border-gray-200`}
      >
        <div className="container mx-auto px-4 py-2 space-y-2">
          <Link
            href="/"
            className="block py-2 text-gray-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#languages"
            className="block py-2 text-gray-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Languages
          </Link>
          <Link
            href="/playground"
            className="block py-2 text-gray-700 font-medium flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Code className="h-5 w-5 mr-2" />
            Code Playground
          </Link>
          <Link
            href="/compare"
            className="block py-2 text-gray-700 font-medium flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BarChart className="h-5 w-5 mr-2" />
            Compare
          </Link>
          <Link
            href="/#contribute"
            className="block py-2 text-gray-700 font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contribute
          </Link>
          <a
            href="https://github.com/devlibguide/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-gray-700 font-medium flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
