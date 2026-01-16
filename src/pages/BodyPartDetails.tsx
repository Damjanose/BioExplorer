import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBodyPart } from '../hooks/useBodyPart';
import BodyPartCard from '../components/BodyPartCard';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../i18n';
import './BodyPartDetails.css';

/**
 * Body part details page - shows information about a specific organ
 */
export const BodyPartDetails: React.FC = () => {
  const { partId } = useParams<{ partId: string }>();
  const navigate = useNavigate();
  const { info, wikipedia, isLoading, error } = useBodyPart(partId || '');
  const { t } = useLanguage();

  if (!partId) {
    return (
      <div className="details-page">
        <div className="error-container">
          <h2>{t.details.notFound}</h2>
          <Link to="/" className="back-link">{t.nav.backToHome}</Link>
        </div>
      </div>
    );
  }

  // Get translated body part data
  const translatedData = t.bodyPartData[partId as keyof typeof t.bodyPartData];
  const translatedInfo = translatedData ? {
    ...info,
    name: translatedData.name,
    system: translatedData.system,
    description: translatedData.description,
    function: translatedData.function,
    funFacts: translatedData.funFacts,
  } : info;

  return (
    <div className="details-page">
      <nav className="details-nav">
        <Link to="/" className="nav-link">
          {t.nav.backToBody}
        </Link>
        <LanguageSwitcher />
        <button 
          className="quiz-button"
          onClick={() => navigate(`/quiz/${partId}`)}
        >
          🎯 {t.details.takeQuiz}
        </button>
      </nav>

      <main className="details-main">
        <BodyPartCard 
          bodyPart={translatedInfo}
          wikipedia={wikipedia}
          isLoading={isLoading}
        />

        {error && (
          <div className="api-notice">
            <p>ℹ️ {t.details.apiNotice}</p>
          </div>
        )}

        <div className="details-actions">
          <button 
            className="action-button primary"
            onClick={() => navigate(`/quiz/${partId}`)}
          >
            🧠 {t.details.testKnowledge}
          </button>
          <Link to="/" className="action-button secondary">
            🔍 {t.details.exploreOther}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BodyPartDetails;
