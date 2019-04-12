import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
}

const ImageHeader: FC<IProps> = ({
  src,
  width,
  height,
  marginLeft,
  marginRight
}) => (
  <img
    style={{ marginLeft, marginRight }}
    src={src}
    width={width}
    height={height}
  />
);

export default ImageHeader;
