import React, { FC } from "react";

interface IProps {
  children: string;
  className?: string;
}

export const Button: FC<IProps> = ({ children, className = "" }) => (
  <button className="w-full h-10 flex justify-center items-center">
    <div className={className}>{children}</div>
  </button>
);
