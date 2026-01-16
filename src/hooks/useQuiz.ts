import { useState, useCallback, useMemo } from 'react';
import type { QuizQuestion, QuizState } from '../types/biology';
import quizzesData from '../data/quizzes.json';

interface UseQuizReturn {
  questions: QuizQuestion[];
  currentQuestion: QuizQuestion | null;
  currentQuestionIndex: number;
  score: number;
  isComplete: boolean;
  totalQuestions: number;
  selectedAnswer: number | null;
  isAnswerCorrect: boolean | null;
  selectAnswer: (answerIndex: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
  progress: number;
}

/**
 * Custom hook to manage quiz state and logic
 * @param bodyPartId - The ID of the body part for the quiz
 */
export function useQuiz(bodyPartId: string): UseQuizReturn {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    isComplete: false,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  // Get questions for this body part
  const questions = useMemo(() => {
    const quizzes = quizzesData.quizzes as Record<string, QuizQuestion[]>;
    return quizzes[bodyPartId] || [];
  }, [bodyPartId]);

  // Use questions directly without shuffling to avoid impure function warning
  // Shuffling can be done on quiz start if needed
  const shuffledQuestions = questions;

  const currentQuestion = shuffledQuestions[state.currentQuestionIndex] || null;
  const totalQuestions = shuffledQuestions.length;
  const progress = totalQuestions > 0 
    ? ((state.currentQuestionIndex + (state.isComplete ? 1 : 0)) / totalQuestions) * 100 
    : 0;

  const selectAnswer = useCallback((answerIndex: number) => {
    if (selectedAnswer !== null || !currentQuestion) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctIndex;
    setIsAnswerCorrect(correct);

    setState((prev) => ({
      ...prev,
      score: correct ? prev.score + 1 : prev.score,
      answers: [...prev.answers, answerIndex],
    }));
  }, [selectedAnswer, currentQuestion]);

  const nextQuestion = useCallback(() => {
    if (state.currentQuestionIndex >= totalQuestions - 1) {
      setState((prev) => ({ ...prev, isComplete: true }));
    } else {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    }
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  }, [state.currentQuestionIndex, totalQuestions]);

  const resetQuiz = useCallback(() => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      answers: [],
      isComplete: false,
    });
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  }, []);

  return {
    questions: shuffledQuestions,
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    score: state.score,
    isComplete: state.isComplete,
    totalQuestions,
    selectedAnswer,
    isAnswerCorrect,
    selectAnswer,
    nextQuestion,
    resetQuiz,
    progress,
  };
}
