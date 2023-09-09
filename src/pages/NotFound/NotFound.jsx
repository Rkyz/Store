import { useState } from "react";

const NotFound = () => {
  const [isDarkMode, setIsDarkMode] = useState (false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
    className={`flex flex-col items-center justify-center min-h-screen ${
      isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-purple-500'
    }`}
  >
    <h1 className={`text-5xl font-extrabold ${
      isDarkMode ? 'text-white' : 'text-white'
    } mb-4`}>
      404 - Page Not Found
    </h1>
    <p className={`text-gray-300 text-lg ${
      isDarkMode ? 'text-gray-400' : 'text-gray-300'
    }`}>
      Ooppssss!!
    </p>
    <button
      className={`mt-4 ${
        isDarkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
      } px-4 py-2 rounded`}
      onClick={toggleDarkMode}  
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  </div>
  );
};

export default NotFound;