import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  text: string;
  isColorWhite?: boolean;
  isSmall?: boolean;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  text,
  isColorWhite = false,
  isSmall = false
}) => (
  <button
    className={classnames(
      "mt-1 h-10 font-lato text-base hover:shadow-lg hover:bg-dark-black active:opacity-50 mr-20 font-bold  border-solid border border-black rounded-xl",
      {
        [`w-${isSmall ? "10" : "48"}`]: true,
        [`text-${isColorWhite ? "white" : "black"}`]: true,
        [`bg-${isInverted ? "black" : "white"}`]: true
      }
    )}
  >
    {text}
  </button>
);
