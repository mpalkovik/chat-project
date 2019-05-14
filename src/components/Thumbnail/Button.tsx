import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = ({ text }) => (
  <button className="rounded-lg w-full h-10 font-black font-lato hover:text-white hover:bg-black text-black">
    {text}
  </button>
);
