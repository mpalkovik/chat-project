import React, { FC } from "react";

interface IProps {
  icon: string;
  alt: string;
  classname?: string;
}
export const Image: FC<IProps> = ({ icon, alt, classname }) => (
  <img alt={alt} src={icon} className={`w-full ${classname}`} />
);
