import React, { FC } from "React";

interface IProps {
  text: string;
}

export const DayInfoMessage: FC<IProps> = ({ text }) => (
  <div>
    <div
      style={{ width: "682px" }}
      className="h-8 font-gilbert text-2xl font-bold ml-6 pb-4"
    >
      {text}
    </div>
    <div className="pt-4 border-b border-solid border-lilac" />
  </div>
);
