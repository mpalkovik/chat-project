import React, { FC } from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import Icons from "../icons/Icons";

const Contacts: FC = () => (
  <div className="h-6 pl-6">
    <div className="pb-1 flex justify-start items-center">
      <div className="pr-3 w-4 h-4">
        <Icons src={Phone} />
      </div>
      <div className="font-lato text-xs color-black">+421 905 271 220</div>
    </div>
    <div className="pb-1 flex justify-start items-center">
      <div className="pr-3 w-4 h-4 bg-red">
        <Icons src={Email} />
      </div>
      <div className="font-lato text-xs color-black">chatkosice@gmail.com</div>
    </div>
  </div>
);

export default Contacts;
