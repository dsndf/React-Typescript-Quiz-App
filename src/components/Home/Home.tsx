import {
  Box,
  Container,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Header from "../Layouts/Header";
import { QuizeType } from "../../vite-env";
import QuizCard from "../QuizCard/QuizCard";
import { FaPython } from "react-icons/fa";
const Home = () => {
  const quizes: QuizeType[] = ["Linux", "Kubernates"];
  return (
    <Container
      width={"100vw"}
      padding={"20px"}
    >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} marginTop={"40px"}>
        Technical Quiz App
      </Heading>
      <HStack justifyContent={"center"} margin={"20px 0"} wrap={"wrap"}>
        {quizes &&
          quizes.map((v) => (
            <QuizCard topicIcon={<FaPython />} topicName={v} />
          ))}
      </HStack>
    </Container>
  );
};

export default Home;
