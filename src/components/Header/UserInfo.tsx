import React, { FC } from "react";

interface IProps {
  name: string;
  kredit: number;
}
export const UserInfo: FC<IProps> = ({ name, kredit }) => (
  <div className="hidden lg:inline-block">
    <div className="h-20 font-gilbert text-16 font-bold">{name}</div>
    <div className="text-blue font-lato text-10 font-bold">
      Kredit {kredit}€
    </div>
  </div>
);
