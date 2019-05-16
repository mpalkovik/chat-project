import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}
export const Description: FC<IProps> = ({ children, classname }) => (
  <div>
    <p
      style={{
        height: "36px",
        lineHeight: "18px"
      }}
      className={classnames("text-sm font-lato w-auto", classname)}
    >
      {children}
    </p>
  </div>
);
