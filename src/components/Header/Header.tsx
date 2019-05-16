import React, { useState } from "react";
import chatImg from "../../static/svg/chatLogo.png";
import { Menu } from "./Menu";
import { ImageHeader } from "./ImageHeader";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";
import { HamburgerMenu } from "./HamburgerMenu";
import closeImg from "../../static/svg/closeImg.svg";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      {openMenu && (
        <div>
          <div className="flex justify-end mr-6 mt-4">
            <div onClick={() => setOpenMenu(false)}>
              <ImageHeader src={closeImg} />
            </div>
          </div>
          <HamburgerMenu />
          <div
            className="opacity-75 bg-darkblue h-full w-full lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      )}
      <div className="flex justify-between items-center content-center h-16 lg:h-12 w-full">
        <Menu onClick={() => setOpenMenu(true)} />
        <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
        <Navigation />
        <UserProfile />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
