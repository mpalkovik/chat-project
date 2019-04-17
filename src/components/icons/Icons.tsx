import React, { FC, ReactNode } from "react";
interface IProps {
  src: string;
  className?: string;
  children?: ReactNode;
}

const Icons: FC<IProps> = props => <img src={props.src} className="w-full" />;

export default Icons;
