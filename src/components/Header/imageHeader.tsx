import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  className?: string;
}

const ImageHeader: FC<IProps> = ({
  src,
  width,
  height,
  marginLeft,
  marginRight,
  className
}) => (
  <img
    style={{ marginLeft, marginRight }}
    src={src}
    width={width}
    height={height}
    className={className}
  />
);

export default ImageHeader;
