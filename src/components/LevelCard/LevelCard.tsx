import React from "react";
import { LevelCardPropsType } from "../../vite-env";
import { Button } from "@chakra-ui/react";

const LevelCard = ({ level, setIsLevelSelected }: LevelCardPropsType) => {
  return (
    <Button
      padding={"10px 20px"}
      borderRadius={"var(--radius)"}
      onClick={() => setIsLevelSelected(false)}
    >
      {level}
    </Button>
  );
};

export default LevelCard;
