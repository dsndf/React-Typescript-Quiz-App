import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { QuizCardPropsType } from "../../vite-env";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ topicName, topicIcon }: QuizCardPropsType) => {
  const navigate = useNavigate();
  const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     navigate('/select/quiz/level/'+topicName);
  };
  return (
    <Box
      width={"200px"}
      cursor={"pointer"}
      padding={"15px"}
      backgroundColor={"#95d1f1"}
      borderRadius={"var(--radius)"}
      margin={"20px"}
      boxShadow={"var(--shadow)"}
      onClick={clickHandler}
    >
      <VStack alignItems={"center"} gap={"10px"}>
        <Box fontSize={"4xl"}>{topicIcon}</Box>
        <Text as={"b"} fontSize={"2xl"}>
          {topicName}
        </Text>
      </VStack>
    </Box>
  );
};

export default QuizCard;
