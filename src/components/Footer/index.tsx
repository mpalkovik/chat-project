import React, { FC } from "react";
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { Info } from "./Info";
import { Icon } from "../Icon";
import { Contacts } from "./Contacts";
import { Location } from "./Location";
import Instagram from "../../static/svg/instagram.svg";
import Facebook from "../../static/svg/facebook-square.svg";

const OverflowOvals = styled.div`
  position: absolute;
  overflow: hidden;
  width: 293px;
  height: 489px;
  right: 0px;
`;

export const Footer: FC = () => (
  <div className=" flex items-end justify-start z-0 bg-cover-image lg:bg-cover-image">
    <div className="flex lg:social-icons sm:social-icons social-icons">
      <div className="w-12 mr-1">
        <a href="">
          <Icon src={Facebook} />
        </a>
      </div>
      <div className="w-12 ml-1">
        <a href="">
          <Icon src={Instagram} />
        </a>
      </div>
    </div>
    <div className=" lg:pl-16 z-20">
      <Logo />
      <div className="lg:flex">
        <div className="pb-6 pr-8">
          <Info />
        </div>
        <div className="sm:flex pt-6 pb-12 ">
          <Location />
          <Contacts />
        </div>
      </div>
    </div>
    <OverflowOvals>
      <div className="z-0 bg-oval sm:bg-oval lg:bg-oval" />
    </OverflowOvals>
  </div>
);
