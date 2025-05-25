
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            Hello
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Welcome to our beautiful corner of the web
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-500 leading-relaxed">
            Simple. Clean. Beautiful.
          </p>
          
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="pt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
