import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import Logo from "./Logo";
import ICO from "./Info";
import Contacts from "./Contacts";
import Location from "./Location";

const Footer: FC<RouteComponentProps> = () => (
  <div className="bg-maize lg:pl-16 ">
    <Logo />
    <div className="lg:flex">
      <div className="pb-6 pr-8">
        <ICO />
      </div>
      <div className="flex pt-6 pb-12 ">
        <Location />
        <Contacts />
      </div>
    </div>
  </div>
);

export default Footer;
