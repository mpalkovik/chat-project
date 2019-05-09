import React, { FC } from "react";

interface IProps {
  src: string;
}

export const Icon: FC<IProps> = ({ src }) => (
  <img src={src} className="w-full" />
);
