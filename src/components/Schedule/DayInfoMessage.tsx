import React, { FC } from "React";

interface IProps {
  text: string;
}

export const DayInfoMessage: FC<IProps> = ({ text }) => (
  <div>
    <div className="lg:text-2xl lg:mb-4 text-xl h-8 font-gilbert ml-6">
      {text}
    </div>
    <div className="border-b border-solid border-lilac" />
  </div>
);
