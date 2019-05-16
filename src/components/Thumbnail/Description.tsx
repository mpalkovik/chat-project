import React, { FC } from "react";
import classnames from "classnames";

<<<<<<< HEAD
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
=======
export const Description: FC = ({ children }) => (
  <p
    className={classnames(
      "text-sm font-lato mb-4 whitespace-normal overflow-hidden"
    )}
  >
    {children}
  </p>
>>>>>>> 95ba63da4de9200561a798a71a5517ca5d4bdf6b
);
