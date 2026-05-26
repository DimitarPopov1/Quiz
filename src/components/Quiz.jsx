import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionsIndex = userAnswers.length;
  const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;

  const handleSelectAnswers = useCallback((selectedAnswer) => {
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswers(null),
    [handleSelectAnswers],
  );
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}></Summary>;
  }
  return (
    <div id="quiz">
      <Question
        questionIndex={activeQuestionsIndex}
        key={activeQuestionsIndex}
        onSelectAnswer={handleSelectAnswers}
        onSkipAnswer={handleSkipAnswer}></Question>
    </div>
  );
};

export default Quiz;
