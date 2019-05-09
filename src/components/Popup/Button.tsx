import React, { FC } from "react";

interface IProps {
  text: string;
  backgroundColor?: "black" | "red" | "green";
}

export const Button: FC<IProps> = ({ text, backgroundColor = "black" }) => (
  <div className="flex justify-center">
    <button className={`bg-${backgroundColor} h-10 w-5/6 rounded-lg`}>
      <div className="text-white font-lato text-base">{text}</div>
    </button>
  </div>
);
