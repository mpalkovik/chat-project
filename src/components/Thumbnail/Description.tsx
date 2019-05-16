import React, { FC } from "react";
import classnames from "classnames";

export const Description: FC = ({ children }) => (
  <p
    className={classnames(
      "text-sm font-lato mb-4 whitespace-normal overflow-hidden"
    )}
  >
    {children}
  </p>
);
