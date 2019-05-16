import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  icon: string;
  alt: string;
}

export const Image: FC<IProps> = ({ icon, alt }) => (
  <img alt={alt} src={icon} className={classnames("w-full mb-2")} />
);
