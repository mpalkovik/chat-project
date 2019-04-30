import React, { FC } from "react";

interface IProps {
  text: string;
}

const Description: FC<IProps> = ({ text }) => (
  <div>
    <h1 className="p-1 0 inline m-0 font-gilbert text-4xl bg-white">
      <strong className="relative">{text}</strong>
    </h1>
  </div>
);
export default Description;
