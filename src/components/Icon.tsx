import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  src: string;
  classname?: string;
}

export const Icon: FC<IProps> = ({ src, classname }) => (
  <img
    src={src}
    className={classnames("text-sm font-lato h-10 leading-less", classname)}
  />
);
