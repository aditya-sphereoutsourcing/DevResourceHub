import { Link } from "wouter";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Programming Libraries Resource</h1>
          <p className="text-lg md:text-xl mb-8">
            A comprehensive open-source guide to libraries and frameworks for web application development across multiple programming languages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#languages" className="btn bg-white text-blue-700 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-200 inline-block">
              Explore Libraries
            </Link>
            <Link href="#contribute" className="btn bg-transparent hover:bg-blue-800 border border-white font-medium py-2 px-6 rounded-md transition duration-200 inline-block">
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
