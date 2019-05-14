import React, { FC } from "react";

interface IProps {
  icon: string;
  alt: string;
}
export const Image: FC<IProps> = ({ icon, alt }) => (
  <img className="mb-2" alt={alt} src={icon} />
);
