import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}
export const Description: FC<IProps> = ({ children, classname }) => (
  <p className={classnames("text-12 font-lato h-40 leading-less", classname)}>
    {children}
  </p>
);
