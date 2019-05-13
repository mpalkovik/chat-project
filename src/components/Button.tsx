import React, { FC } from "react";

interface IProps {
  inverted?: boolean;
  text: string;
  isColorWhite?: boolean;
  size?: boolean;
}

export const Button: FC<IProps> = ({
  inverted = false,
  text,
  isColorWhite = false,
  size = false
}) => (
  <button
    className={`mt-1 h-10 w-${size ? "10" : "48"} text-${
      isColorWhite ? "white" : "black"
    } font-lato text-base hover:shadow-lg hover:bg-dark-black active:opacity-50 mr-20 font-bold bg-${
      inverted ? "black" : "white"
    } border-solid border-2 border-black rounded-xl`}
  >
    {text}
  </button>
);
