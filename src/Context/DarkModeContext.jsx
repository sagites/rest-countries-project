/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

// Create context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove previous theme class and apply new theme class
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    
    // Store the theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
