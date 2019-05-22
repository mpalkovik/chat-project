import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  src: string;
  className?: string;
}

export const Icon: FC<IProps> = ({ src, className }) => (
  <img
    src={src}
    className={classnames("text-12 font-lato h-40 leading-less", className)}
  />
);
