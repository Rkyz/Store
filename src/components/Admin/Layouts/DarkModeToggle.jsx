import { useState } from 'react';
import '../../../App.css'; // Atur file CSS utama di sini
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <button
      className="text-2xl dark:text-white text-black text-opacity-80 hover:cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default DarkModeToggle;
