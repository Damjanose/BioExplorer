import React from 'react';
import { useLanguage, type Language } from '../i18n';
import './LanguageSwitcher.css';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'al' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('al')}
        title="Shqip"
      >
        🇦🇱 SQ
      </button>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        title="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
