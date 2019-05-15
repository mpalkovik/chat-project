import React, { FC } from "react";

interface IProps {
  src: string;
  width?: number;
  className?: string;
  onClick?: () => void;
}

export const ImageHeader: FC<IProps> = ({
  src,
  width = "auto",
  className = "",
  onClick
}) => <img src={src} width={width} className={className} onClick={onClick} />;
