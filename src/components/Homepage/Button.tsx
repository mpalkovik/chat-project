import React, { FC } from "react";

interface IProps {
  text: string;
}

const Button: FC<IProps> = ({ text }) => (
  <div className="w-full h-10 flex justify-center items-center">
    <h4 className="font-lato">{text}</h4>
  </div>
);

export default Button;
