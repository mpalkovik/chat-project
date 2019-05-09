import React, { FC } from "react";

interface IProps {
  inverted?: boolean;
  text: string;
  color?: boolean;
  size?: boolean;
}

export const Button: FC<IProps> = ({ inverted, text, color, size }) => (
  <button
    className={`mt-1 h-10 w-${size ? "10" : "48"} text-${
      color ? "white" : "black"
    } font-lato text-base hover:shadow-lg hover:bg-dark-black active:opacity-50 mr-20 font-bold bg-${
      inverted ? "black" : "white"
    }`}
    style={{
      borderRadius: "12px",
      borderColor: "black",
      borderWidth: "1px",
      outline: "0"
    }}
  >
    {text}
  </button>
);
