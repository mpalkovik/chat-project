import React from "react";
import { Link } from "@reach/router";

const Navigation = () => (
  <div className="hidden lg:inline-block mt-5">
    <Link to="#" className="link pr-8">
      Arteterapie
    </Link>
    <Link to="#" className="link pr-8">
      Rozvrh
    </Link>
    <Link to="#" className="link">
      Clanky
    </Link>
  </div>
);

export default Navigation;
