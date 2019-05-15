import React, { FC } from "react";


export const Description: FC = ({ children }) => (
  <div className="leading-tight">
    <h1 className="font-gilbert text-4xl">
      <span className="bg-white">{children}</span>
    </h1>
  </div>
);
