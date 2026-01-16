import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { getBodyPartById } from '../api/bodyApi';
import { useLanguage } from '../i18n';
import './QuizPage.css';

/**
 * Quiz page for testing knowledge about a body part
 */
export const QuizPage: React.FC = () => {
  const { partId } = useParams<{ partId: string }>();
  const navigate = useNavigate();
  const bodyPart = getBodyPartById(partId || '');
  const { t } = useLanguage();

  const bodyPartName = partId ? (t.bodyParts[partId as keyof typeof t.bodyParts] || bodyPart?.name || '') : '';

  if (!partId || !bodyPart) {
    return (
      <div className="quiz-page">
        <div className="quiz-error">
          <span className="error-icon">❓</span>
          <h2>{t.quiz.quizNotFound}</h2>
          <p>{t.quiz.quizNotFoundDesc}</p>
          <Link to="/" className="error-link">{t.nav.backToHome}</Link>
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
          {t.nav.backTo} {bodyPartName}
        </Link>
        <LanguageSwitcher />
        <Link to="/" className="nav-link home">
          🏠 {t.nav.home}
        </Link>
      </nav>

      <main className="quiz-main">
        <Quiz 
          bodyPartId={partId}
          bodyPartName={bodyPartName}
          onBack={handleBack}
        />
      </main>
    </div>
  );
};

export default QuizPage;
