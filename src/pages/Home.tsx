import React from 'react';
import { Link } from 'react-router-dom';
import HumanBodySVG from '../components/HumanBodySVG';
import { getAllBodyParts } from '../api/bodyApi';
import './Home.css';

/**
 * Home page with the interactive human body
 */
export const Home: React.FC = () => {
  const bodyParts = getAllBodyParts();

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>🧬 BioExplorer</h1>
        <p className="home-subtitle">
          Explore the human body and learn about its amazing parts!
        </p>
      </header>

      <main className="home-main">
        <section className="body-section">
          <HumanBodySVG />
        </section>

        <section className="parts-list-section">
          <h2>📋 All Body Parts</h2>
          <div className="parts-grid">
            {bodyParts.map((part) => (
              <Link 
                key={part.id} 
                to={`/body/${part.id}`}
                className="part-card"
              >
                <span className="part-icon">{getPartIcon(part.id)}</span>
                <div className="part-info">
                  <h3>{part.name}</h3>
                  <span className="part-system">{part.system}</span>
                </div>
                <span className="part-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>🎓 A school biology project | Built with React + TypeScript</p>
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
