import React, { FC, ReactNode } from "react";
interface IProps {
  src: string;
  className?: string;
  children?: ReactNode;
}

const Icon: FC<IProps> = props => <img src={props.src} className="w-full" />;

export default Icon;
