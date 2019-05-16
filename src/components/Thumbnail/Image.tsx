import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  icon: string;
  alt: string;
}

<<<<<<< HEAD
export const Image: FC<IProps> = ({ icon, alt, classname }) => (
  <img
    alt={alt}
    src={icon}
    style={{ height: "160px" }}
    className={classnames("w-full", classname)}
  />
=======
export const Image: FC<IProps> = ({ icon, alt }) => (
  <img alt={alt} src={icon} className={classnames("w-full mb-2")} />
>>>>>>> 95ba63da4de9200561a798a71a5517ca5d4bdf6b
);
