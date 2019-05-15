import React, { FC } from "react";
import classnames from "classnames";

export interface IProps {
  classname?: string;
}

export const Description: FC<IProps> = ({ children, classname = "" }) => (
  <p className={classnames("text-sm font-lato", classname)}>{children}</p>
);
