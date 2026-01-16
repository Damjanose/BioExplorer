import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useBodyPart } from '../hooks/useBodyPart';
import BodyPartCard from '../components/BodyPartCard';
import './BodyPartDetails.css';

/**
 * Body part details page - shows information about a specific organ
 */
export const BodyPartDetails: React.FC = () => {
  const { partId } = useParams<{ partId: string }>();
  const navigate = useNavigate();
  const { info, wikipedia, isLoading, error } = useBodyPart(partId || '');

  if (!partId) {
    return (
      <div className="details-page">
        <div className="error-container">
          <h2>Body part not found</h2>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <nav className="details-nav">
        <Link to="/" className="nav-link">
          ← Back to Body
        </Link>
        <button 
          className="quiz-button"
          onClick={() => navigate(`/quiz/${partId}`)}
        >
          🎯 Take Quiz
        </button>
      </nav>

      <main className="details-main">
        <BodyPartCard 
          bodyPart={info}
          wikipedia={wikipedia}
          isLoading={isLoading}
        />

        {error && (
          <div className="api-notice">
            <p>ℹ️ Using offline data (Wikipedia unavailable)</p>
          </div>
        )}

        <div className="details-actions">
          <button 
            className="action-button primary"
            onClick={() => navigate(`/quiz/${partId}`)}
          >
            🧠 Test Your Knowledge
          </button>
          <Link to="/" className="action-button secondary">
            🔍 Explore Other Parts
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BodyPartDetails;
