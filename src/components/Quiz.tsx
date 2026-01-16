import React, { useRef, useEffect } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import Question from './Question';
import { useLanguage } from '../i18n';
import './Quiz.css';

interface QuizProps {
  bodyPartId: string;
  bodyPartName: string;
  onComplete?: (score: number, total: number) => void;
  onBack?: () => void;
}

/**
 * Quiz component that manages the quiz flow for a specific body part
 */
export const Quiz: React.FC<QuizProps> = ({
  bodyPartId,
  bodyPartName,
  onComplete,
  onBack,
}) => {
  const { t } = useLanguage();
  const {
    currentQuestion,
    currentQuestionIndex,
    score,
    isComplete,
    totalQuestions,
    selectedAnswer,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    progress,
  } = useQuiz(bodyPartId);

  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  const handleNext = () => {
    if (isComplete && onComplete) {
      onComplete(score, totalQuestions);
    }
    nextQuestion();
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return { emoji: '🏆', message: t.quiz.perfect };
    if (percentage >= 80) return { emoji: '🌟', message: t.quiz.excellent };
    if (percentage >= 60) return { emoji: '👍', message: t.quiz.good };
    if (percentage >= 40) return { emoji: '📚', message: t.quiz.keepLearning };
    return { emoji: '💪', message: t.quiz.dontGiveUp };
  };

  // Get translated quiz questions
  const translatedQuizData = t.quizData[bodyPartId as keyof typeof t.quizData];
  const translatedQuestion = translatedQuizData && currentQuestion 
    ? {
        ...currentQuestion,
        question: translatedQuizData[currentQuestionIndex]?.question || currentQuestion.question,
        options: translatedQuizData[currentQuestionIndex]?.options || currentQuestion.options,
      }
    : currentQuestion;

  if (totalQuestions === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-empty">
          <span className="quiz-empty-icon">📝</span>
          <h2>{t.quiz.noQuizAvailable}</h2>
          <p>{t.quiz.noQuizDesc} {bodyPartName} {t.quiz.yet}</p>
          {onBack && (
            <button className="quiz-btn secondary" onClick={onBack}>
              {t.quiz.goBack}
            </button>
          )}
        </div>
      </div>
    );
  }

  if (isComplete) {
    const { emoji, message } = getScoreMessage();
    return (
      <div className="quiz-container">
        <div className="quiz-complete">
          <span className="score-emoji">{emoji}</span>
          <h2>{t.quiz.complete}</h2>
          <div className="final-score">
            <span className="score-number">{score}</span>
            <span className="score-divider">/</span>
            <span className="score-total">{totalQuestions}</span>
          </div>
          <p className="score-message">{message}</p>
          <div className="quiz-complete-actions">
            <button className="quiz-btn primary" onClick={resetQuiz}>
              🔄 {t.quiz.tryAgain}
            </button>
            {onBack && (
              <button className="quiz-btn secondary" onClick={onBack}>
                {t.nav.backTo} {bodyPartName}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1 className="quiz-title">🧠 {bodyPartName} {t.quiz.title}</h1>
        <div className="quiz-progress-bar">
          <div 
            ref={progressRef}
            className="quiz-progress-fill" 
          />
        </div>
        <div className="quiz-stats">
          <span className="quiz-score">{t.quiz.score}: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}</span>
        </div>
      </div>

      {translatedQuestion && (
        <Question
          question={translatedQuestion.question}
          options={translatedQuestion.options}
          selectedAnswer={selectedAnswer}
          correctIndex={translatedQuestion.correctIndex}
          onSelectAnswer={selectAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
      )}

      <div className="quiz-actions">
        {selectedAnswer !== null && (
          <button 
            className="quiz-btn primary"
            onClick={handleNext}
          >
            {currentQuestionIndex === totalQuestions - 1 ? t.quiz.seeResults : t.quiz.nextQuestion} →
          </button>
        )}
        {onBack && (
          <button className="quiz-btn text" onClick={onBack}>
            {t.quiz.exitQuiz}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
