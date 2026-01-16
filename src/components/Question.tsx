import React from 'react';
import './Question.css';

interface QuestionProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  correctIndex: number;
  onSelectAnswer: (index: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

/**
 * Individual quiz question component with multiple choice options
 */
export const Question: React.FC<QuestionProps> = ({
  question,
  options,
  selectedAnswer,
  correctIndex,
  onSelectAnswer,
  questionNumber,
  totalQuestions,
}) => {
  const hasAnswered = selectedAnswer !== null;

  const getOptionClass = (index: number) => {
    if (!hasAnswered) {
      return 'option';
    }
    
    if (index === correctIndex) {
      return 'option correct';
    }
    
    if (index === selectedAnswer && index !== correctIndex) {
      return 'option incorrect';
    }
    
    return 'option disabled';
  };

  const getOptionIcon = (index: number) => {
    if (!hasAnswered) return null;
    
    if (index === correctIndex) {
      return <span className="option-icon">✓</span>;
    }
    
    if (index === selectedAnswer && index !== correctIndex) {
      return <span className="option-icon">✗</span>;
    }
    
    return null;
  };

  return (
    <div className="question-container">
      <div className="question-header">
        <span className="question-number">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>
      
      <h2 className="question-text">{question}</h2>
      
      <div className="options-list">
        {options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onSelectAnswer(index)}
            disabled={hasAnswered}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="option-text">{option}</span>
            {getOptionIcon(index)}
          </button>
        ))}
      </div>

      {hasAnswered && (
        <div className={`feedback ${selectedAnswer === correctIndex ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === correctIndex ? (
            <>🎉 Correct! Great job!</>
          ) : (
            <>❌ Not quite. The correct answer is: <strong>{options[correctIndex]}</strong></>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
