import { Plus, Edit } from "lucide-react";

const ContributeSection = () => {
  return (
    <section id="contribute" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contribute to DevLibGuide</h2>
          <p className="text-gray-600">Help improve this resource by contributing new libraries, updating information, or fixing errors. All contributions are welcome!</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <Plus className="h-6 w-6 mr-2 text-blue-600" />
              Add New Libraries
            </h3>
            <p className="text-gray-600 mb-4">Found a library that should be included? Share it with the community by submitting the details through our GitHub repository.</p>
            <div className="mt-4">
              <a 
                href="https://github.com/devlibguide/resources/issues/new?template=new-library.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Submit a new library
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <Edit className="h-6 w-6 mr-2 text-blue-600" />
              Update Information
            </h3>
            <p className="text-gray-600 mb-4">Help keep this resource current by updating library information, fixed bugs, or improving documentation with pull requests.</p>
            <div className="mt-4">
              <a 
                href="https://github.com/devlibguide/resources/pulls" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Create a pull request
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
