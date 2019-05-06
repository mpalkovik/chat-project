import React from "react";
import { Link } from "@reach/router";

const links = [
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

export const Navigation = () => (
  <div className="hidden lg:inline-block mt-5">
    {links.map(({ title, to }) => (
      <Link
        key={title}
        to={to}
        className="link pl-8 pr-8 pb-2 hover:border-b-4 border-solid border-maize"
      >
        {title}
      </Link>
    ))}
  </div>
);
