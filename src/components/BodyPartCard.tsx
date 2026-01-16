import React from 'react';
import type { BodyPart, WikipediaSummary } from '../types/biology';
import { useLanguage } from '../i18n';
import './BodyPartCard.css';

interface BodyPartCardProps {
  bodyPart: BodyPart;
  wikipedia?: WikipediaSummary;
  isLoading?: boolean;
}

/**
 * Card component displaying detailed information about a body part
 */
export const BodyPartCard: React.FC<BodyPartCardProps> = ({
  bodyPart,
  wikipedia,
  isLoading,
}) => {
  const { t } = useLanguage();

  return (
    <div className="body-part-card">
      <div className="card-header">
        <h1 className="card-title">{bodyPart.name}</h1>
        <span className="card-system">{bodyPart.system}</span>
      </div>

      {isLoading && (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p>{t.details.loadingInfo}</p>
        </div>
      )}

      <div className="card-content">
        {/* Image section */}
        <div className="card-image-section">
          {wikipedia?.thumbnail ? (
            <img
              src={wikipedia.thumbnail.source}
              alt={bodyPart.name}
              className="card-image"
            />
          ) : bodyPart.image ? (
            <img
              src={bodyPart.image}
              alt={bodyPart.name}
              className="card-image"
            />
          ) : (
            <div className="card-image-placeholder">
              <span>🫀</span>
            </div>
          )}
        </div>

        {/* Description */}
        <section className="card-section">
          <h2>📖 {t.details.description}</h2>
          <p>{bodyPart.description}</p>
        </section>

        {/* Function */}
        <section className="card-section">
          <h2>⚙️ {t.details.function}</h2>
          <p>{bodyPart.function}</p>
        </section>

        {/* Fun Facts */}
        {bodyPart.funFacts && bodyPart.funFacts.length > 0 && (
          <section className="card-section fun-facts">
            <h2>🎉 {t.details.funFacts}</h2>
            <ul>
              {bodyPart.funFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Wikipedia link */}
        {wikipedia?.content_urls?.desktop?.page && (
          <section className="card-section">
            <a
              href={wikipedia.content_urls.desktop.page}
              target="_blank"
              rel="noopener noreferrer"
              className="wikipedia-link"
            >
              📚 {t.details.readMoreWikipedia}
            </a>
          </section>
        )}
      </div>
    </div>
  );
};

export default BodyPartCard;
