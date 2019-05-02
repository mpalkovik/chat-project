import React, { FC } from "react";

interface IProps {
  text?: string;
}

const InfoMessage: FC<IProps> = ({ text }) => (
  <div className="mt-5 mr-12 ml-6 font-lato text-base">{text}</div>
);

export default InfoMessage;
