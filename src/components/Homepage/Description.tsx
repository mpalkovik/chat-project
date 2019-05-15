import React, { FC } from "react";

interface IProps {
  children: string;
}

export const Description: FC<IProps> = ({ children }) => (
  <div className="leading-tight">
    <h1 className="font-gilbert text-4xl">
      <span className="bg-white">{children}</span>
    </h1>
  </div>
);
