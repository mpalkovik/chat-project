import React from "react";
import userIcon from "../../static/svg/userIcon.svg";
import ImageHeader from "./ImageHeader";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

const UserButton = () => (
  <div className="flex flex-row w-auto lg:mr-10 w-48 flex flex-row">
    <div className="w-8 h-8 rounded-lg mr-4 flex items-center justify-center bg-lilac">
      <UserMenu />
      <ImageHeader
        src={userIcon}
        width={16}
        height={16}
        className="flex flex-row lg:hidden"
      />
    </div>
    <UserProfile />
  </div>
);

export default UserButton;
