import React, { FC } from "react";

interface IProps {
  title: string;
  subtitle: string;
  paragraph: string;
}
export const Layout: FC<IProps> = ({ title, subtitle, paragraph }) => (
  <div className="ml-6 mr-6 lg:ml-24 mr-24">
    <div className="font-gilbert text-2xl font-bold text-black pb-4 pt-5">
      {title}
    </div>
    <div className="font-lato text-base font-bold text-black pb-4">
      {subtitle}
    </div>
    <div className="font-lato text-base font-normal text-black ">
      {paragraph}
    </div>
  </div>
);
