import React, { useState } from "react";

const CrawleePage = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex flex-col items-center justify-center px-4`}
    >
      {/* Header */}
      <header
        className={`absolute top-0 left-0 w-full flex justify-between items-center py-4 px-6 ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="bg-orange-500 rounded-full w-8 h-8"></div>
          <h1 className="text-xl font-semibold">Crawlee</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#docs"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Docs
          </a>
          <a
            href="#examples"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Examples
          </a>
          <a
            href="#api"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            API
          </a>
          <a
            href="#changelog"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Changelog
          </a>
          <a
            href="#blog"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Blog
          </a>
          <a
            href="#nodejs"
            className={`hover:${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Node.js
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
                
            }`}
            
          >
            3.12
          </button>
          <div className="flex items-center space-x-4">
           

             {/* Dark Mode Toggle */}
             <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-500 hover:border-gray-400"
            >
              {darkMode ? (
                <span role="img" aria-label="Moon">
                  🌙
                </span>
              ) : (
                <span role="img" aria-label="Sun">
                  ☀️
                </span>
              )}
            </button>

             {/* GitHub Logo */}
             <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                alt="GitHub"
                className="w-6 h-6"
              />
            </a>
            {/* Discord Logo */}
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
                alt="Discord"
                className="w-6 h-6"
              />
            </a>
            <button className="text-gray-300 hover:text-white">Search</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center space-y-6 text-center mt-16">
       
        <h1 className="text-4xl font-bold">
          Crawlee is a{" "}
          <span className="text-orange-500">web</span>
          <br></br>
          <span className="text-orange-500"> scraping</span> and{" "}
          <span className="text-orange-500">browser</span>
          <br></br>
          <span className="text-orange-500"> automation</span> library
        </h1>
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          It helps you build reliable crawlers. Fast.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600">
            Get Started
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-orange-500 material-icons">star</span>
            <span>15,629</span>
          </div>
        </div>
         
        <div className="mt-4">
          {/* Add Image */}
         <img
          src="/images/logo-blur-f5954a6b7743aa97a2653c9510a62510.png"
          alt="Crawlee Logo"
          className="w-48 h-48"
        />
          <code
            className={`px-4 py-2 rounded ${
              darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-700"
            }`}
          >
            npx crawlee create my-crawler
          </code>
        </div>
      </main>
    </div>
  );
};

export default CrawleePage;
