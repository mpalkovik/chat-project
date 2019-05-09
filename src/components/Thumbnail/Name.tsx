import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Name: FC<IProps> = ({ text }) => {
  return (
    <p className="font-Gilbert font-bold text-xl text-black leading-1.33">
      {text}
    </p>
  );
};
