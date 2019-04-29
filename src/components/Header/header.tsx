import React from "react";
import chatImg from "../../static/svg/chatLogo.png";
import Menu from "./Menu";
import UserButton from "./UserButton";
import ImageHeader from "./ImageHeader";
import Navigation from "./Navigation";

const Header = () => (
  <div>
    <div className="flex justify-between items-center content-center h-16 lg:h-12 flex justify-between items-center content-center w-full">
      <Menu />
      <ImageHeader src={chatImg} width={73} height={27} className="lg:ml-12" />
      <Navigation />
      <UserButton />
    </div>
    <div className="bg-lilac h-px" />
  </div>
);

export default Header;
