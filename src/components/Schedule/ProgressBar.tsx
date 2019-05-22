import React, { FC } from "react";

interface IProps {
  actual: number;
  max: number;
}

export const ProgressBar: FC<IProps> = ({ actual, max }) => (
  <div
    style={{ width: (actual / max) * 100 + "%" }}
    className="border-b border-solid border-2 border-black inline-block absolute"
  />
);
