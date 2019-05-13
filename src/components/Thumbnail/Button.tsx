import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = ({ text }) => (
  <button className="rounded-lg bg-transparent w-full h-10 font-black font-lato text-black hover:text-white hover:bg-black text-black font-black">
    {text}
  </button>
);
