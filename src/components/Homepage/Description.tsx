import React, { FC } from "react";

export const Description: FC = ({ children }) => (
  <h1 className="font-gilbert text-45 leading-tight">
    <span className="bg-white">{children}</span>
  </h1>
);
