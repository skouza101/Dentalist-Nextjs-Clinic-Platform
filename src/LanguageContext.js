'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Default to 'fr' as requested by the user, but fallback to localStorage if set
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('site_lang');
      return saved && ['en', 'fr', 'ar'].includes(saved) ? saved : 'fr';
    }
    return 'fr';
  });

  const setLanguage = (lang) => {
    if (['en', 'fr', 'ar'].includes(lang)) {
      document.body.classList.add('switching-language');
      setTimeout(() => {
        setLanguageState(lang);
        localStorage.setItem('site_lang', lang);
        setTimeout(() => {
          document.body.classList.remove('switching-language');
        }, 300);
      }, 300);
    }
  };

  useEffect(() => {
    // Dynamic RTL support for Arabic, LTR for English/French
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    // Optional: Add/remove RTL class on body for custom CSS overrides
    if (dir === 'rtl') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }
  }, [language]);

  // Translation function
  const t = (key) => {
    if (translations[language] && translations[language][key] !== undefined) {
      return translations[language][key];
    }
    // Fallback to English if translation is missing in the target language
    if (translations['en'] && translations['en'][key] !== undefined) {
      return translations['en'][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
