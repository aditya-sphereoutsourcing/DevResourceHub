import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { ALL_TAG_CATEGORIES, SUPPORTED_LANGUAGES } from "@/data";

interface SearchSectionProps {
  onSearch: (term: string) => void;
  onLanguageFilter: (language: string) => void;
  onCategoryFilter: (category: string) => void;
}

const SearchSection = ({ onSearch, onLanguageFilter, onCategoryFilter }: SearchSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageFilter(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCategoryFilter(e.target.value);
  };

  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search libraries by name, functionality..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <button className="absolute right-2 top-2 text-gray-500">
                    <SearchIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                <select 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  onChange={handleLanguageChange}
                >
                  <option value="">All Languages</option>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang} value={lang.toLowerCase()}>
                      {lang === "cpp" ? "C++" : lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </option>
                  ))}
                </select>
                <select 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  onChange={handleCategoryChange}
                >
                  <option value="">All Categories</option>
                  {ALL_TAG_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
