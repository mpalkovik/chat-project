import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Name: FC<IProps> = ({ text }) => (
  <p className="font-gilbert text-xl text-black">{text}</p>
);
