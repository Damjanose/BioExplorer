import React, { useRef, useEffect } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import Question from './Question';
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
    if (percentage === 100) return { emoji: '🏆', message: 'Perfect score! Amazing!' };
    if (percentage >= 80) return { emoji: '🌟', message: 'Excellent work!' };
    if (percentage >= 60) return { emoji: '👍', message: 'Good job!' };
    if (percentage >= 40) return { emoji: '📚', message: 'Keep learning!' };
    return { emoji: '💪', message: "Don't give up! Try again!" };
  };

  if (totalQuestions === 0) {
    return (
      <div className="quiz-container">
        <div className="quiz-empty">
          <span className="quiz-empty-icon">📝</span>
          <h2>No Quiz Available</h2>
          <p>Sorry, there's no quiz available for {bodyPartName} yet.</p>
          {onBack && (
            <button className="quiz-btn secondary" onClick={onBack}>
              ← Go Back
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
          <h2>Quiz Complete!</h2>
          <div className="final-score">
            <span className="score-number">{score}</span>
            <span className="score-divider">/</span>
            <span className="score-total">{totalQuestions}</span>
          </div>
          <p className="score-message">{message}</p>
          <div className="quiz-complete-actions">
            <button className="quiz-btn primary" onClick={resetQuiz}>
              🔄 Try Again
            </button>
            {onBack && (
              <button className="quiz-btn secondary" onClick={onBack}>
                ← Back to {bodyPartName}
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
        <h1 className="quiz-title">🧠 {bodyPartName} Quiz</h1>
        <div className="quiz-progress-bar">
          <div 
            ref={progressRef}
            className="quiz-progress-fill" 
          />
        </div>
        <div className="quiz-stats">
          <span className="quiz-score">Score: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}</span>
        </div>
      </div>

      {currentQuestion && (
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswer}
          correctIndex={currentQuestion.correctIndex}
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
            {currentQuestionIndex === totalQuestions - 1 ? 'See Results' : 'Next Question'} →
          </button>
        )}
        {onBack && (
          <button className="quiz-btn text" onClick={onBack}>
            ← Exit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
