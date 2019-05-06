import React, { FC } from "react";

export interface IDescribe {
  text: string;
}

const TherapyDescription: FC<IDescribe> = ({ text }) => {
  return (
    <p className="text-sm leading-normal font-lato font-normal mb-4">{text}</p>
  );
};

export default TherapyDescription;
