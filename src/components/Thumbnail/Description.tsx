import React, { FC } from "react";

export interface IProps {
  text: string;
}

export const Description: FC<IProps> = ({ text }) => (
  <p className="text-sm leading-normal font-lato mb-4">{text}</p>
);
