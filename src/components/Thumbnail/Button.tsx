import React, { FC } from "react";

interface IProps {
  children: string;
}

export const Button: FC<IProps> = ({ children }) => (
  <button className="rounded-lg w-full h-10 font-black font-lato hover:text-white hover:bg-black text-black">
    {children}
  </button>
);
