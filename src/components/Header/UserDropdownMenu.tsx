import React, { FC } from "react";
import { Link } from "@reach/router";
import euroSign from "../../static/svg/euroSign.svg";
import idBadge from "../../static/svg/idBadge.svg";
import powerOff from "../../static/svg/powerOff.svg";
import { ImageHeader } from "./ImageHeader";

interface IProps {
  userInicials: string;
  userName: string;
  credit: number;
}

const links = [
  {
    src: euroSign,
    title: "Kredity",
    to: "#"
  },
  {
    src: idBadge,
    title: "Profil",
    to: "#"
  },
  { src: powerOff, title: "Odhlasit sa", to: "#" }
];

export const UserDropdownMenu: FC<IProps> = ({
  userInicials,
  userName,
  credit
}) => (
  <div className="bg-white w-full">
    <div className="flex justify-center flex-col items-center">
      <div className="flex bg-lilac h-16 w-16 rounded-lg font-gilbert text-2xl justify-center items-center">
        {userInicials}
      </div>
      <div className="font-gilbert text-2xl mt-4">{userName}</div>
      <div className="font-lato text-base text-blue mt-1">Kredit {credit}€</div>
    </div>
    {links.map(({ src, title, to }) => (
      <div key={title}>
        <div className="flex flex-row items-center justify-start ml-6 mt-4">
          <ImageHeader src={src} />
          <Link
            to={to}
            title={title}
            className="font-lato text-base text-black no-underline font-bold ml-4"
          >
            {title}
          </Link>
        </div>
        <div className="bg-lilac mt-4 mb-4 ml-6 mr-6 h-px" />
      </div>
    ))}
  </div>
);
