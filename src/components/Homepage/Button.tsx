import React, { FC } from "react";

interface IProps {
  text: string;
}

const Button: FC<IProps> = ({ text }) => (
  <div className="w-full h-10 flex justify-center items-center">
    <div className="font-lato font-bold">{text}</div>
  </div>
);

export default Button;
