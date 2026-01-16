import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from './translations/en';
import { al } from './translations/al';

type Language = 'en' | 'al';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  en,
  al,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for saved preference, default to Albanian
    const saved = localStorage.getItem('bioexplorer-language');
    return (saved === 'en' || saved === 'al') ? saved : 'al';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bioexplorer-language', lang);
  };

  useEffect(() => {
    // Set document language attribute
    document.documentElement.lang = language === 'al' ? 'sq' : 'en';
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export type { Language, Translations };
