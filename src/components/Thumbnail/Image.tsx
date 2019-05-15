import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  icon: string;
  alt: string;
  classname?: string;
}
export const Image: FC<IProps> = ({ icon, alt, classname = "" }) => (
  <img alt={alt} src={icon} className={classnames("w-full", classname)} />
);
