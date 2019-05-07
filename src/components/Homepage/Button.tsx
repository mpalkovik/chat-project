import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = ({ text }) => (
  <div className="w-full h-10 flex justify-center items-center">
    <div className="font-lato font-bold">{text}</div>
  </div>
);
