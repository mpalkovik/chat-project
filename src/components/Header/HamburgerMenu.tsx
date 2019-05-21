import React from "react";
import { Link } from "@reach/router";

const links = [
  {
    title: "Domov",
    to: "#"
  },
  {
    title: "Arteterapie",
    to: "#"
  },
  {
    title: "Rozvrh",
    to: "#"
  },
  {
    title: "Články",
    to: "#"
  }
];

export const HamburgerMenu = () => (
  <div className="bg-white h-64 mt-4">
    <div className="mt-4 ml-6 mr-6 flex flex-col">
      {links.map(({ title, to }) => (
        <Link
          key={title}
          to={to}
          className="bg-white font-lato font-bold text-black text-xl no-underline"
        >
          {title}
          <div className="bg-lilac mt-4 mb-4 h-px" />
        </Link>
      ))}
    </div>
  </div>
);
