import React, { FC } from "react";

interface IProps {
  date: string;
  title: string;
  subtitle: string;
  paragraph: string;
  source: string;
  text: string;
}
export const Layout: FC<IProps> = ({
  date,
  title,
  subtitle,
  paragraph,
  source,
  text
}) => (
  <div className="ml-6 mr-6 lg:ml-24">
    <div className="lg:mr-24">
      <div className="font-lato text-xs font-normal text-grey pt-4">{date}</div>
      <div className="font-gilbert text-2xl font-bold text-black pb-4 pt-5">
        {title}
      </div>
      <div className="font-lato text-base font-bold text-black pb-4">
        {subtitle}
      </div>
      <div className="font-lato text-base font-normal text-black pb-12">
        {paragraph}
      </div>
      <span className="font-lato text-xs font-normal text-black">{source}</span>
      <span className="font-lato text-xs font-normal text-grey inline-block pl-2 pb-8">
        {text}
      </span>
    </div>
  </div>
);
