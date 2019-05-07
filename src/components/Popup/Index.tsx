import React, { FC } from "react";

export const Index: FC = ({ children }) => (
  <div
    style={{
      width: "343px",
      height: "420px"
    }}
    className="pt-4 pb-6 border-black border m-auto flex flex-col justify-between"
  >
    {children}
  </div>
);
