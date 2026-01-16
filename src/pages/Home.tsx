import React from 'react';
import { Link } from 'react-router-dom';
import HumanBodySVG from '../components/HumanBodySVG';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { getAllBodyParts } from '../api/bodyApi';
import { useLanguage } from '../i18n';
import './Home.css';

/**
 * Home page with the interactive human body
 */
export const Home: React.FC = () => {
  const bodyParts = getAllBodyParts();
  const { t } = useLanguage();

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-top">
          <h1>🧬 {t.app.title}</h1>
          <LanguageSwitcher />
        </div>
        <p className="home-subtitle">
          {t.app.subtitle}
        </p>
      </header>

      <main className="home-main">
        <section className="body-section">
          <HumanBodySVG />
        </section>

        <section className="parts-list-section">
          <h2>📋 {t.home.allBodyParts}</h2>
          <div className="parts-grid">
            {bodyParts.map((part) => (
              <Link 
                key={part.id} 
                to={`/body/${part.id}`}
                className="part-card"
              >
                <span className="part-icon">{getPartIcon(part.id)}</span>
                <div className="part-info">
                  <h3>{t.bodyParts[part.id as keyof typeof t.bodyParts] || part.name}</h3>
                  <span className="part-system">{t.bodyPartData[part.id as keyof typeof t.bodyPartData]?.system || part.system}</span>
                </div>
                <span className="part-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>🎓 {t.app.footer}</p>
      </footer>
    </div>
  );
};

function getPartIcon(partId: string): string {
  const icons: Record<string, string> = {
    heart: '❤️',
    brain: '🧠',
    lungs: '🫁',
    liver: '🫀',
    stomach: '🍽️',
    kidneys: '🫘',
    intestines: '🔄',
    skeleton: '🦴',
  };
  return icons[partId] || '🔬';
}

export default Home;
