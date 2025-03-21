import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import LanguageTabs from "@/components/LanguageTabs";
import ContributeSection from "@/components/ContributeSection";
import Footer from "@/components/Footer";
import { libraries } from "@/data";
import { Library } from "@/types";

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

      if (!hasActiveFilters) {
        setFilteredLibraries({
          c: [...libraries.c],
          cpp: [...libraries.cpp],
          java: [...libraries.java],
          javascript: [...libraries.javascript],
          python: [...libraries.python],
        });
        return;
      }

      // Filter each language's libraries
      const filtered = {
        c: filterBySearchAndCategory(libraries.c),
        cpp: filterBySearchAndCategory(libraries.cpp),
        java: filterBySearchAndCategory(libraries.java),
        javascript: filterBySearchAndCategory(libraries.javascript),
        python: filterBySearchAndCategory(libraries.python),
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
