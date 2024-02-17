import React, { Dispatch, ReactNode } from "react";
type InputValues = string | number;
const Box = <T extends InputValues>({
  title,
  desc,
  value,
  children,
  setState,
}: {
  title: string;
  desc: string;
  value: T;
  children: ReactNode;
  setState: Dispatch<React.SetStateAction<T>>;
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{desc}</p>
      <p>{value}</p>
      {
        typeof value === "string" ? <input
        type="text"
        value={value}
        onChange={(e) => setState(e.target.value as T)}
      />:<>

    </>
      }
     
    </div>
  );
};

export default Box;
