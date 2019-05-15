import React, { FC, Children } from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";

interface IProps {
  button: string;
  description: string;
  name: string;
  icon: string;
  alt: string;
}
export const Thumbnail: FC<IProps> = ({
  button,
  description,
  name,
  icon,
  alt
}) => (
  <div className="p-2 w-1/5 shadow block">
    <Image icon={icon} alt={alt} classname="mb-2" />
    <Name>{name}</Name>
    <Description classname="mb-4">{description}</Description>
    <Button>{button}</Button>
  </div>
);
