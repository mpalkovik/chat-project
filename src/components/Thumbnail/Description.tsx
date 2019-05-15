import React, { FC, ReactNode } from "react";
import classnames from "classnames";

export interface IProps {
  children: ReactNode;
  classname?: string;
}

export const Description: FC<IProps> = ({ children, classname = "" }) => (
  <p className={classnames("text-sm font-lato", classname)}>{children}</p>
);
