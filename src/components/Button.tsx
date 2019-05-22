import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  isStretched?: boolean;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  children,
  isStretched = false
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
        [`${isStretched ? "w-full" : "pr-8 pl-8"}`]: true
      }
    )}
  >
    {children}
  </button>
);
