import {
  Badge,
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import Timer from "../Timer/Timer";
import { Context } from "../Context/ApiContext";
import {
  QuestionContextApiStateType,
  QuestionDetailsType,
} from "../../vite-env";
import axios, { AxiosResponse } from "axios";

const Quiz = () => {
  const [activeQustion, setActiveQuestion] = useState<number>(0);
  const [activeOption, setActiveOption] = useState<string>("");

  const {
    questions,
    setQuestions,
    quizCategory,
    setAnsweredQuestions,
    answeredQuestions,
  } = useContext(Context) as QuestionContextApiStateType;
  const fetchQustions = async (): Promise<void> => {
    const { data } = await axios.get<QuestionDetailsType[]>(
      "https://quizapi.io/api/v1/questions",
      {
        params: {
          apiKey: "vvyHNzWRYMbuZnmHmJMdkGMR3IEkt3HBVelTEyfr",
          limit: 10,
        },
      }
    );
    const recievedData = data;
    let tempArr: QuestionDetailsType[] = [];
    for (let i of recievedData) {
      tempArr.push({
        question: i.question,
        id: i.id,
        answers: i.answers,
        correct_answers: i.correct_answers,
      });
    }
    setQuestions(tempArr);
  };
  const nextQuestionHandler = (): void => {
    setActiveQuestion((prev) => prev + 1);
    let answerOfQuestion =
      answeredQuestions[questions?.[activeQustion + 1]?.id];
    if (answerOfQuestion) {
      setActiveOption(answerOfQuestion.answer);
    } else setActiveOption("");
  };
  const prevQuestionHandler = (): void => {
    setActiveQuestion((prev) => prev - 1);
    let answerOfQuestion =
      answeredQuestions[questions?.[activeQustion - 1]?.id];
    if (answerOfQuestion) {
      setActiveOption(answerOfQuestion.answer);
    } else setActiveOption("");
  };
  const giveAndCheckAnswerHandler = (
    questionId: number,
    key: string,
    correct_answers: QuestionDetailsType["correct_answers"]
  ): void => {
    let correctAnswersKey: string = key + "_correct";
    let answer: string = key;
    let score = 0;
    if (correct_answers[correctAnswersKey] === "true") {
      score++;
    }

    setAnsweredQuestions({
      ...answeredQuestions,
      [questionId]: { score, answer },
    });
  };
  useEffect(() => {
    console.log(answeredQuestions);
    // fetchQustions();
  }, [answeredQuestions]);
  return (
    <Box px={5}>
      <HStack justifyContent={"space-between"} alignItems={"flex-end"}>
        <VStack alignItems={"flex-start"}>
          <Heading textAlign={"left"}>Linux Quiz</Heading>{" "}
          <Text
            mt={1}
            fontSize={"large"}
            display={"flex"}
            justifyContent={"center"}
          >
            Level:
            <Badge colorScheme="green" ml={"1"} fontSize={"medium"}>
              Easy
            </Badge>
          </Text>
        </VStack>
        <Text display={"flex"} alignItems={"flex-end"} fontSize={"2xl"}>
          <Badge fontSize={"2xl"} colorScheme="red">
            <Timer seconds={10} minutes={0} />
          </Badge>
        </Text>
      </HStack>

      <VStack width={"50%"} mx={"auto"} textAlign={"left"}>
        <></>
        <Heading as={"h4"} width={"100%"} size={"lg"}>
          Q{activeQustion + 1}. {questions?.[activeQustion]?.question}
        </Heading>
        <VStack width={"100%"} alignItems={"flex-start"}>
          <h1>{activeOption}</h1>
          <RadioGroup onChange={setActiveOption} value={activeOption}>
            <VStack alignItems={"flex-start"}>
              {questions?.[activeQustion]?.answers &&
                Object.keys(questions[activeQustion].answers).map((key) => {
                  return (
                    questions[activeQustion].answers[key] && (
                      <Radio
                        value={key}
                        onChange={() =>
                          giveAndCheckAnswerHandler(
                            questions[activeQustion].id,
                            key,
                            questions[activeQustion].correct_answers
                          )
                        }
                      >
                        {questions[activeQustion].answers[key]}
                      </Radio>
                    )
                  );
                })}
            </VStack>
          </RadioGroup>
          <HStack gap={"10px"} justifyContent={"space-between"}>
            <Button
              bg={"var(--bg)"}
              isDisabled={activeQustion === 0}
              onClick={prevQuestionHandler}
            >
              Prev
            </Button>
            <Button
              bg={"var(--bg)"}
              isDisabled={activeQustion === questions.length - 1}
              onClick={nextQuestionHandler}
            >
              Next
            </Button>
          </HStack>
        </VStack>
        <Button
          w={"100%"}
          my={"20px"}
          style={{
            visibility:
              questions.length === Object.keys(answeredQuestions).length?"visible":"hidden"
          }}
        >
          Finish
        </Button>
      </VStack>
    </Box>
  );
};

export default Quiz;
