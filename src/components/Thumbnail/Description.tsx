import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}
export const Description: FC<IProps> = ({ children, classname }) => (
  <p className={classnames("text-sm font-lato h-10 leading-less", classname)}>
    {children}
  </p>
);
