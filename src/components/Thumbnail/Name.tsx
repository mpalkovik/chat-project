import React, { FC } from "react";

interface IProps {
  children: string;
}

export const Name: FC<IProps> = ({ children }) => (
  <p className="font-gilbert text-xl text-black">{children}</p>
);
