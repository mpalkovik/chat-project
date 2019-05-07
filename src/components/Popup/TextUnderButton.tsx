import React, { FC } from "react";

interface IProps {
  text: string;
}

export const TextUnderButton: FC<IProps> = ({ text }) => (
  <div className="text-xs text-center font-lato mt-2 text-grey pl-10 pr-10">
    {text}
  </div>
);
