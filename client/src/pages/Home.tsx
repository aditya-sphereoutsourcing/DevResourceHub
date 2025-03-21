import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import LanguageTabs from "@/components/LanguageTabs";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";
import { libraries } from "@/data";
import { Library } from "@/types";

// Function to remove duplicate libraries based on name
const removeDuplicates = (libraryList: Library[]): Library[] => {
  const uniqueLibraries = new Map<string, Library>();
  
  // Only keep the latest version of each library (by name)
  libraryList.forEach(library => {
    uniqueLibraries.set(library.name.toLowerCase(), library);
  });
  
  return Array.from(uniqueLibraries.values());
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredLibraries, setFilteredLibraries] = useState({
    c: [...libraries.c],
    cpp: [...libraries.cpp],
    java: [...libraries.java],
    javascript: [...libraries.javascript],
    python: [...libraries.python],
  });
  const [activeFilters, setActiveFilters] = useState(false);

  // Filter libraries based on search term and selected filters
  useEffect(() => {
    const filterLibraries = () => {
      // Check if any filters are active
      const hasActiveFilters = searchTerm !== "" || languageFilter !== "" || categoryFilter !== "";
      setActiveFilters(hasActiveFilters);

      // Remove duplicates from each language's libraries
      const uniqueLibraries = {
        c: removeDuplicates(libraries.c),
        cpp: removeDuplicates(libraries.cpp),
        java: removeDuplicates(libraries.java),
        javascript: removeDuplicates(libraries.javascript),
        python: removeDuplicates(libraries.python),
      };

      if (!hasActiveFilters) {
        setFilteredLibraries(uniqueLibraries);
        return;
      }

      // Filter each language's libraries (after removing duplicates)
      const filtered = {
        c: filterBySearchAndCategory(uniqueLibraries.c),
        cpp: filterBySearchAndCategory(uniqueLibraries.cpp),
        java: filterBySearchAndCategory(uniqueLibraries.java),
        javascript: filterBySearchAndCategory(uniqueLibraries.javascript),
        python: filterBySearchAndCategory(uniqueLibraries.python),
      };

      setFilteredLibraries(filtered);
    };

    // Helper function to filter libraries by search term and category
    const filterBySearchAndCategory = (libraryList: Library[]) => {
      return libraryList.filter((library) => {
        const matchesSearch =
          searchTerm === "" ||
          library.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          library.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          library.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory =
          categoryFilter === "" ||
          library.tags.some((tag) => 
            tag.toLowerCase() === categoryFilter.toLowerCase() || 
            tag.toLowerCase().includes(categoryFilter.toLowerCase())
          );

        return matchesSearch && matchesCategory;
      });
    };

    filterLibraries();
  }, [searchTerm, languageFilter, categoryFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <Hero />
      <SearchSection
        onSearch={setSearchTerm}
        onLanguageFilter={setLanguageFilter}
        onCategoryFilter={setCategoryFilter}
      />
      <LanguageTabs 
        libraries={libraries} 
        filteredLibraries={filteredLibraries} 
        activeFilters={activeFilters} 
      />
      <ContributeSection />
      <Footer />
    </div>
  );
};

export default Home;
