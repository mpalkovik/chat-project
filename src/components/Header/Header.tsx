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
        <>
          <div className="lg:hidden bg-white z-50 absolute w-full">
            <div className="flex justify-end mr-6 mt-4">
              <div onClick={() => setOpenMenu(false)}>
                <ImageHeader src={closeImg} />
              </div>
            </div>
            <div className="z-50">
              <HamburgerMenu />
            </div>
          </div>
          <div
            className="lg:hidden opacity-75 z-20 bg-darkblue fixed h-full w-full inset-0 lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        </>
      )}
      <div className="flex justify-between items-center content-center h-16 lg:h-12 w-full">
        <Menu onClick={() => setOpenMenu(true)} />
        <div className="flex flex-start lg:w-48">
          <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
        </div>
        <Navigation />
        <UserProfile />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
