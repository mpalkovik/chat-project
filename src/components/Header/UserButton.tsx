import React from "react";
import userIcon from "../../static/svg/userIcon.svg";
import ImageHeader from "./ImageHeader";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";
import { Link } from "@reach/router";

const UserButton = () => (
  <div className="flex flex-row w-auto lg:mr-10 w-48 flex flex-row">
    <div className="w-8 h-8 rounded-lg mr-4 flex items-center justify-center bg-lilac">
      <UserMenu />
      <ImageHeader src={userIcon} className="flex flex-row h-4 w-4 lg:hidden" />
    </div>
    <UserProfile />
    <div className="flex flex-col overflow-auto z-10 absolute">
      <Link to="#" className="userProfileLinks">
        Some
      </Link>
      <Link to="#" className="userProfileLinks">
        Some
      </Link>
      <Link to="#" className="userProfileLinks">
        Some
      </Link>
      <Link to="#" className="userProfileLinks">
        Some
      </Link>
    </div>
  </div>
);

export default UserButton;
