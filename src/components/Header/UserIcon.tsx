import React, { FC } from "react";

interface IProps {
  credentials: string;
}

export const UserIcon: FC<IProps> = ({ credentials }) => (
  <div className="hidden lg:inline-block">
    <div className="font-gilbert font-bold text-lg">{credentials}</div>
  </div>
);
