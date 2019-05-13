import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Name: FC<IProps> = ({ text }) => (
  <p className="font-Gilbert font-bold text-xl text-black leading-1.33">
    {text}
  </p>
);
