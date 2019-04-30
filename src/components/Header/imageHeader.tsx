import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  className?: string;
}

const ImageHeader: FC<IProps> = ({ src, width, className }) => (
  <img src={src} width={width} className={className} />
);

export default ImageHeader;
