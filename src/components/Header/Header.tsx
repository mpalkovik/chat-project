import React from "react";
import chatImg from "../../static/svg/chatLogo.png";
import { Menu } from "./Menu";
import { ImageHeader } from "./ImageHeader";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";

export const Header = () => (
  <div>
    <div className="flex justify-between items-center content-center h-16 lg:h-12 flex justify-between items-center content-center w-full">
      <Menu />
      <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
      <Navigation />
      <UserProfile />
    </div>
    <div className="bg-lilac h-px" />
  </div>
);
