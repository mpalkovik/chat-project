import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
  order?: number;
  display?: string;
  className?: string;
}

const ImageHeader: FC<IProps> = ({
  src,
  width,
  height,
  marginLeft,
  marginRight,
  order,
  display,
  className
}) => (
  <img
    style={{ marginLeft, marginRight, order, display }}
    src={src}
    width={width}
    height={height}
    className={className}
  />
);

export default ImageHeader;
