import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  isInverted?: boolean;
  isStretched?: boolean;
  classname?: string;
  onClick?: () => void;
}

export const Button: FC<IProps> = ({
  isInverted = false,
  children,
  isStretched = false,
  classname,
  onClick
}) => (
  <button
    onClick={onClick}
    className={classnames(
      "h-10 font-lato text-base hover:shadow-lg active:opacity-50 font-bold border-solid border border-black rounded-xl",
      {
        [`${
          isInverted
            ? "bg-black text-white hover:bg-dark-black"
            : "bg-white text-black"
        }`]: true,
        [`${isStretched ? "w-full" : "pr-8 pl-8"}`]: true
      },
      classname
    )}
  >
    {children}
  </button>
);
