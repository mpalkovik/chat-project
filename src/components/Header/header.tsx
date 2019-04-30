import React, { FC } from "react";
import chatImg from "../../static/svg/chatLogo.png";
import Menu from "./Menu";
import UserButton from "./UserButton";
import ImageHeader from "./ImageHeader";
import Navigation from "./Navigation";
import { RouteComponentProps } from "@reach/router";

const Header: FC<RouteComponentProps> = () => (
  <div>
    <div className="flex justify-between items-center content-center h-16 lg:h-12 flex justify-between items-center content-center w-full">
      <Menu />
      <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
      <Navigation />
      <UserButton />
    </div>
    <div className="bg-lilac h-px" />
  </div>
);

export default Header;
