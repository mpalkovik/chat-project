import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Name: FC<IProps> = ({ children }) => (
  <p className="font-gilbert text-xl text-black">{children}</p>
);
