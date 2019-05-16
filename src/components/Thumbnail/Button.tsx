import React, { FC } from "react";

export const Button: FC = ({ children }) => (
  <button className="rounded-lg w-full mb-2 h-10 font-black font-lato hover:text-white hover:bg-black text-black">
    {children}
  </button>
);
