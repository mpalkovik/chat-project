import React, { FC } from "react";

export interface IProps {
  children: string;
  classname?: string;
}

export const Description: FC<IProps> = ({ children, classname = "" }) => (
  <p className={`text-sm font-lato ${classname}`}>{children}</p>
);
