import React, { FC } from "react";

export interface IProps {
  text: string;
  classname?: string;
}

export const Description: FC<IProps> = ({ text, classname = "" }) => (
  <p className={`text-sm font-lato ${classname}`}>{text}</p>
);
