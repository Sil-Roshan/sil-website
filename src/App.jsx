import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import Concept from './components/sections/Concept';
import Features from './components/sections/Features';
import Community from './components/sections/Community';
import ComingSoon from './components/sections/ComingSoon';
import './App.css';

function App() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? JSON.parse(saved) : prefersDark;
    setIsDark(dark);
    updateTheme(dark);
  }, []);

  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    localStorage.setItem('darkMode', JSON.stringify(!isDark));
    updateTheme(!isDark);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className={`transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <Navigation 
          isDark={isDark} 
          toggleDarkMode={toggleDarkMode}
          toggleLanguage={toggleLanguage}
          currentLang={i18n.language}
        />
        <Hero />
        <Concept />
        <Features />
        <Community />
        <ComingSoon />
      </div>
    </div>
  );
}

export default App;
