/// <reference types="vite/client" />

import { Dispatch, ReactNode, SetStateAction } from "react"

type QuestionType = {
    score: number,
    details: {
        question: string,
        options: [string],
        answer: string
    }
}
type QuizeType = 'Linux' | 'Kubernates';
type QuizCardPropsType = {
    topicName: QuizeType,
    topicIcon: ReactNode
}
type levelType = 'Easy' | 'Medium' | 'Difficult';
interface LevelCardPropsType {
    level: levelType,
    setIsLevelSelected: React.Dispatch<React.SetStateAction<boolean>>
}
interface TimerPropsType {
    minutes: number,
    seconds: number
    hour?: number
}
type CorrectAnswersObjectType = {
    [key:string]:string
}
type AnswersObjectType = {
  [key:string]:string,
}
interface QuestionDetailsType {
question:string,
answers:AnswersObjectType,
id:number,
correct_answers:CorrectAnswersObjectType
}


interface QuestionContextApiStateType {
quizCategory:QuizeType | null,
setQuizCategory:Dispatch<SetStateAction<QuizeType | null>>
levelOfDifficulty:levelType,
setLevelOfDifficulty:Dispatch<SetStateAction<levelType>>,
questions:QuestionDetailsType[]
setQuestions:Dispatch<SetStateAction<QuestionDetailsType[]>>
result:Number,
answeredQuestions:{
    [key:string]:{
         answer:string,
         score:number
    }
}
setAnsweredQuestions:Dispatch<SetStateAction<QuestionContextApiStateType['answeredQuestions']>>
}