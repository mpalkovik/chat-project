import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
  icon: string;
  alt: string;
}

export const Image: FC<IProps> = ({ icon, alt, classname }) => (
  <img
    alt={alt}
    src={icon}
    style={{ height: "160px" }}
    className={classnames("w-full", classname)}
  />
);
