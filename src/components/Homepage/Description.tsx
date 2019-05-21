import React, { FC } from "react";

export const Description: FC = ({ children }) => (
  <h1 className="font-gilbert text-4xl">
    <span className="bg-white">{children}</span>
  </h1>
);
