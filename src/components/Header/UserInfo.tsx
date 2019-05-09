import React, { FC } from "react";

interface IProps {
  name: string;
  kredit: number;
}
export const UserInfo: FC<IProps> = ({ name, kredit }) => (
  <div className="hidden lg:inline-block">
    <div className="h-5 font-gilbert text-base font-bold">{name}</div>
    <div className="text-blue font-lato text-xs font-bold">
      Kredit {kredit}€
    </div>
  </div>
);
