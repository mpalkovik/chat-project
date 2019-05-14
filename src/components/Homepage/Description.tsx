import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Description: FC<IProps> = ({ text }) => (
  <h1 className="p-1 0 m-0 font-gilbert text-4xl">
    <span className="bg-white inline">{text}</span>
  </h1>
);
