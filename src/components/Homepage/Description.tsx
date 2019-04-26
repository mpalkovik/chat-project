import React, { FC } from "react";

interface IProps {
  text: string;
}

const Description: FC<IProps> = ({ text }) => (
  <div>
    <h1 className="font-gilbert text-3xl">{text}</h1>
  </div>
);
export default Description;
