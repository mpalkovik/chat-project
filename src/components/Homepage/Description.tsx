import React, { FC } from "react";

export const Description: FC = ({ children }) => (
  <h1 className="font-gilbert text-4xl leading-tight">
    <span className="bg-white">{children}</span>
  </h1>
);
