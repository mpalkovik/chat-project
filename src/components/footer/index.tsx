import React, { FC } from "react";
import Logo from "./Logo";
import ICO from "./Info";
import Contacts from "./Contacts";
import Location from "./Location";

const Footer: FC = () => (
  <div className=" flex items-end justify-start z-0 bg-cover-image lg:bg-cover-image">
    <div className="z-0 bg-oval lg:bg-oval" />
    <div className=" lg:pl-16 z-20">
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
  </div>
);

export default Footer;
