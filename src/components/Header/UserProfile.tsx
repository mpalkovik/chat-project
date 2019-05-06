import React from "react";
import userIcon from "../../static/svg/userIcon.svg";
import { ImageHeader } from "./ImageHeader";
import { UserInfo } from "./UserInfo";
import { UserIcon } from "./UserIcon";
import { UserMenu } from "./UserMenu";

export const UserProfile = () => (
  <div className="group relative">
    <div className="flex flex-row w-auto lg:mr-10 w-48 inline-block cursor-pointer">
      <div className="w-8 h-8 rounded-lg mr-4 flex items-center justify-center bg-lilac">
        <UserIcon credentials="FS" />
        <ImageHeader
          src={userIcon}
          className="flex flex-row h-4 w-4 lg:hidden"
        />
      </div>
      <UserInfo name="Feri Schwartzeneger" kredit={10} />
    </div>
    <div className="absolute invisible group-hover:visible w-full">
      <UserMenu />
    </div>
  </div>
);
