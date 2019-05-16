import React, { FC } from "react";

export const Name: FC = ({ children }) => (
  <span
    className="font-gilbert flex text-xl text-black w-full"
    style={{ height: "28px" }}
  >
    {children}
  </span>
);
