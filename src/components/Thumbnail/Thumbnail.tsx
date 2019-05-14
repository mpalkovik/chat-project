import React, { FC } from "react";
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
  <div className="container ml-6">
    <div className="p-2 w-1/5 m-2 shadow mr-2 mb-2 block">
      <Image icon={icon} alt={alt} />
      <Name text={name} />
      <Description text={description} />
      <Button text={button} />
    </div>
  </div>
);
