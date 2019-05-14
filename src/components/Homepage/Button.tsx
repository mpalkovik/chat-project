import React, { FC } from "react";

interface IProps {
  text: string;
  className: string;
}

export const Button: FC<IProps> = ({ text, className }) => (
  <button className="w-full h-10 flex justify-center items-center">
    <div className={className}>{text}</div>
  </button>
);
