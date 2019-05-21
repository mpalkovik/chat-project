import React, { FC } from "react";

interface IProps {
  text: string;
}

export const DayInfoMessage: FC<IProps> = ({ text }) => (
  <div className="lg:text-2xl lg:h-12 text-xl h-8 font-gilbert pl-6 border-b border-solid border-lilac">
    {text}
  </div>
);
