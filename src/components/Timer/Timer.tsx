import React, { useEffect, useState } from "react";
import { TimerPropsType } from "../../vite-env";
import { Box } from "@chakra-ui/react";

const Timer = ({ minutes, seconds }: TimerPropsType) => {
  const [minute, setMinute] = useState<TimerPropsType["minutes"]>(minutes);
  const [second, setSecond] = useState<TimerPropsType["seconds"]>(seconds);
  useEffect(() => {
    const tid = setTimeout(() => {
      if (minute === 0  && second === 0) {
        return alert("Times up")
      } else if (minute > 0 && second === 0) {
        setMinute((prev) => prev - 1);
      }
      if (second > 0) {
        setSecond((prev) => prev - 1);
      } else if (second === 0) {
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(tid);
  }, [second, minute]);

  return (
    <p>
      {minute}:{second}
    </p>
  );
};

export default Timer;
