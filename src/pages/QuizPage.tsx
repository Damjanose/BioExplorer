import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { getBodyPartById } from '../api/bodyApi';
import './QuizPage.css';

/**
 * Quiz page for testing knowledge about a body part
 */
export const QuizPage: React.FC = () => {
  const { partId } = useParams<{ partId: string }>();
  const navigate = useNavigate();
  const bodyPart = getBodyPartById(partId || '');

  if (!partId || !bodyPart) {
    return (
      <div className="quiz-page">
        <div className="quiz-error">
          <span className="error-icon">❓</span>
          <h2>Quiz Not Found</h2>
          <p>We couldn't find a quiz for this body part.</p>
          <Link to="/" className="error-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(`/body/${partId}`);
  };

  return (
    <div className="quiz-page">
      <nav className="quiz-nav">
        <Link to={`/body/${partId}`} className="nav-link">
          ← Back to {bodyPart.name}
        </Link>
        <Link to="/" className="nav-link home">
          🏠 Home
        </Link>
      </nav>

      <main className="quiz-main">
        <Quiz 
          bodyPartId={partId}
          bodyPartName={bodyPart.name}
          onBack={handleBack}
        />
      </main>
    </div>
  );
};

export default QuizPage;
