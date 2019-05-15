import React, { FC, ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  classname?: string;
}

export const Description: FC<IProps> = ({ children, classname = "" }) => (
  <p className={`text-sm font-lato ${classname}`}>{children}</p>
);
