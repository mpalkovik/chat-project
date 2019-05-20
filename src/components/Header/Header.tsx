import React, { useState } from "react";
import chatImg from "../../static/svg/chatLogo.png";
import { Menu } from "./Menu";
import { ImageHeader } from "./ImageHeader";
import { Navigation } from "./Navigation";
import { UserProfile } from "./UserProfile";
import { HamburgerMenu } from "./HamburgerMenu";
import times from "../../static/svg/times.svg";
import { UserDropdownMenu } from "./UserDropdownMenu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserProfile, setUserProfile] = useState(false);
  return (
    <div>
      {openMenu && (
        <div>
          <div className="flex justify-end mr-6 mt-4">
            <div onClick={() => setOpenMenu(false)}>
              <ImageHeader src={times} />
            </div>
          </div>
          <HamburgerMenu />
          <div
            className="opacity-75 bg-darkblue h-full w-full lg:hidden"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      )}

      {openUserProfile && (
        <div className="lg:hidden">
          <div className="flex justify-end mr-6 mt-4">
            <div onClick={() => setUserProfile(false)}>
              <ImageHeader src={times} />
            </div>
          </div>
          <UserDropdownMenu
            userInicials={"FS"}
            userName={"Feri Schwartzeneger"}
            credit={4}
          />
          <div
            className="opacity-75 bg-darkblue h-full w-full lg:hidden"
            onClick={() => setUserProfile(false)}
          />
        </div>
      )}

      <div className="flex justify-between items-center content-center h-16 lg:h-12 w-full">
        <Menu onClick={() => setOpenMenu(true)} />
        <ImageHeader src={chatImg} width={73} className="h-6 lg:ml-12" />
        <Navigation />
        <UserProfile onClick={() => setUserProfile(true)} />
      </div>
      <div className="bg-lilac h-px" />
    </div>
  );
};
