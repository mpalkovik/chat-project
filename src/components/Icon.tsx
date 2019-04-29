import React, { FC } from "react";
interface IProps {
  src: string;
  className?: string;
}

const Icon: FC<IProps> = props => <img src={props.src} className="w-full" />;

export default Icon;
