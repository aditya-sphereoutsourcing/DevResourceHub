import { useState } from 'react';
import LibraryComparison from '../components/LibraryComparison';
import { libraries } from '../data';
import { Helmet } from 'react-helmet';
import { Library } from '../types';

// Convert the format of libraries to match the LibraryComparison component
const convertLibraries = (libs: any): { [key: string]: Library[] } => {
  const result: { [key: string]: Library[] } = {};
  
  // Map lowercase language keys in the data to match UI expectations
  Object.keys(libs).forEach(key => {
    const libArray = libs[key] as Library[];
    
    // Handle various capitalization in language names
    if (key === 'c') result['c'] = libArray;
    else if (key === 'cpp') result['c++'] = libArray;
    else if (key === 'java') result['java'] = libArray;
    else if (key === 'javascript') result['javascript'] = libArray;
    else if (key === 'python') result['python'] = libArray;
    else if (key === 'rust') result['rust'] = libArray;
    else if (key === 'swift') result['swift'] = libArray;
    else result[key.toLowerCase()] = libArray;
  });
  
  return result;
};

export default function ComparisonPage() {
  const formattedLibraries = convertLibraries(libraries);
  
  return (
    <div className="py-10">
      <Helmet>
        <title>Library Comparison Tool | DevLibGuide</title>
        <meta name="description" content="Compare different programming libraries side by side to find the best fit for your project." />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Library Comparison Tool</h1>
            <p className="text-gray-600 text-lg">
              Compare features, tags, and characteristics of different programming libraries side by side
            </p>
          </div>
          
          <LibraryComparison libraries={formattedLibraries} />
        </div>
      </div>
    </div>
  );
}