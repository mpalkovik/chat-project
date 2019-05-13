import React, { FC } from "react";

interface IProps {
  isInverted?: boolean;
  text: string;
  isColorWhite?: boolean;
  isBig?: boolean;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  text,
  isColorWhite = false,
  isBig = false
}) => (
  <button
    className={`w-${isBig ? "10" : "48"} text-${
      isColorWhite ? "white" : "black"
    } bg-${isInverted ? "black" : "white"} 
   mt-1 h-10 font-lato text-base hover:shadow-lg hover:bg-dark-black active:opacity-50 mr-20 font-bold  border-solid border border-black rounded-xl`}
  >
    {text}
  </button>
);
