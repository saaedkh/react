//contexts/ThemeContext
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
