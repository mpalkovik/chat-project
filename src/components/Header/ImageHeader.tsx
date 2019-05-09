import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  className: string;
}

export const ImageHeader: FC<IProps> = ({ src, width = "auto", className }) => (
  <img src={src} width={width} className={className} />
);
