import React, { ReactNode, createContext, useState } from "react";
import { QuestionContextApiStateType, QuestionDetailsType } from "../../vite-env";
export const Context = createContext<QuestionContextApiStateType | undefined>(
  undefined
);
const ApiContext = ({ children }: { children: ReactNode }) => {
  const [quizCategory, setQuizCategory] =  useState<QuestionContextApiStateType["quizCategory"]>(null);
  const [questions, setQuestions] = useState<
    QuestionContextApiStateType["questions"]
  >([...JSON.parse(localStorage.questions)]);
  const [levelOfDifficulty, setLevelOfDifficulty] =
    useState<QuestionContextApiStateType["levelOfDifficulty"]>("Easy");
  const [result, setResult] =
    useState<QuestionContextApiStateType["result"]>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    QuestionContextApiStateType["answeredQuestions"]
  >({});
  return (
    <Context.Provider
      value={{
        quizCategory,
        setQuizCategory,
        levelOfDifficulty,
        setLevelOfDifficulty,
        questions,
        setQuestions,
        answeredQuestions,
        result,
        setAnsweredQuestions
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ApiContext;
