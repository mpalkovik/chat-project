import React, { FC } from "react";

interface IName {
  text: string;
}

const TherapyName: FC<IName> = ({ text }) => {
  return (
    <p className="font-Gilbert font-bold roman text-xl text-black leading-1.33">
      {text}
    </p>
  );
};

export default TherapyName;
