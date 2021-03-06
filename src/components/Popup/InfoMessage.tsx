import React, { FC } from "react";

interface IProps {
  text: string;
}

export const InfoMessage: FC<IProps> = ({ text }) => (
  <div className="mt-20 mr-48 ml-24 font-lato text-16">{text}</div>
);
