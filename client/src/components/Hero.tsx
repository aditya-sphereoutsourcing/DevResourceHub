import { Link } from "wouter";
import { Code, BarChart, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Programming Libraries Resource</h1>
          <p className="text-lg md:text-xl mb-8">
            A comprehensive open-source guide to libraries and frameworks for web application development across multiple programming languages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link href="#languages" className="btn bg-white text-blue-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-200 inline-block">
              Explore Libraries
            </Link>
            <Link href="#contribute" className="btn bg-transparent hover:bg-blue-800 border border-white font-medium py-2 px-6 rounded-md transition duration-200 inline-block">
              Contribute
            </Link>
          </div>
          
          <div className="mt-6 pt-4 border-t border-blue-600">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 flex-wrap">
              <Link href="/playground" className="flex items-center bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                <Code className="h-5 w-5 mr-2" />
                Try Interactive Code Playground
              </Link>
              <Link href="/compare" className="flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                <BarChart className="h-5 w-5 mr-2" />
                Compare Libraries
              </Link>
              <Link href="/practice" className="flex items-center bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105">
                <BookOpen className="h-5 w-5 mr-2" />
                Practice Coding & Algorithms
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">Interactive tools to explore, compare and improve your coding skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
