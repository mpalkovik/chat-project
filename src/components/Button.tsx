import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  stretched?: boolean;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  children,
  stretched = false
}) => (
  <button
    className={classnames(
      "h-10 font-lato text-base hover:shadow-lg active:opacity-50 font-bold border-solid border border-black rounded-xl",
      {
        [`${
          isInverted
            ? "bg-black text-white hover:bg-dark-black"
            : "bg-white text-black"
        }`]: true,
        [`${stretched ? "w-full" : "pr-8 pl-8"}`]: true
      }
    )}
  >
    {children}
  </button>
);
