import React, { FC } from "react";

interface IProps {
  className?: string;
}

export const Button: FC<IProps> = ({ children, className = "text-white font-lato font-bold" }) => (
  <button className="w-full h-10 flex justify-center items-center">
    <div className={className}>{children}</div>
  </button>
);
