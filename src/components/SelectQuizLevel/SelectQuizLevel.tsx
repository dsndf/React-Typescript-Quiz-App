import { Button, Box, HStack, Heading, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdArrowRight } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import LevelCard from "../LevelCard/LevelCard";
import { useNavigate } from "react-router-dom";

const SelectQuizLevel = () => {
  const [isLevelSelected, setIsLevelSelected] = useState<boolean>(true);
  const navigate = useNavigate();
  return (
    <Box  padding={"20px"}>
      <VStack>
        <Heading textAlign={"center"} as={"h3"}>
          Select quize level
        </Heading>
        <HStack justifyContent={"center"}  marginTop={"30px"} gap={10}>
          <LevelCard level={"Easy"} setIsLevelSelected={setIsLevelSelected} />
          <LevelCard level={"Medium"} setIsLevelSelected={setIsLevelSelected} />
          <LevelCard
            level={"Difficult"}
            setIsLevelSelected={setIsLevelSelected}
          />
        </HStack>
        <Button
          size={"lg"}
          colorScheme={"teal"}
          variant={"outline"}
          rightIcon={<BiSolidRightArrow />}
          margin={10}
          isDisabled={isLevelSelected}
          onClick={()=>navigate('/quiz')}
        >
          Start Quiz
        </Button>
      </VStack>
    </Box>
  );
};

export default SelectQuizLevel;
