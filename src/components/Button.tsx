import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  text: string;
}

export const Button: FC<IProps> = ({ isInverted = false, text }) => (
  <button
    className={classnames(
      "mt-1 h-10 w-full font-lato text-base hover:shadow-lg hover:bg-dark-black active:opacity-50 mr-20 font-bold  border-solid border border-black rounded-xl",
      {
        [`${isInverted ? "bg-black text-white" : "bg-white text-black"}`]: true
      }
    )}
  >
    {text}
  </button>
);
