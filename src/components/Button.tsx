import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
}

export const Button: FC<IProps> = ({ isInverted = false, children }) => (
  <button
    className={classnames(
      "mt-1 h-10 w-full font-lato text-base hover:shadow-lg active:opacity-50 mr-20 font-bold border-solid border border-black rounded-xl",
      {
        [`${
          isInverted
            ? "bg-black text-white hover:bg-dark-black"
            : "bg-white text-black"
        }`]: true
      }
    )}
  >
    {children}
  </button>
);
