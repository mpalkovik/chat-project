import React from "react";
import Phone from "../../static/svg/icon-phone.svg";
import Email from "../../static/svg/email.svg";
import Icon from "../Icon";

const Contacts = () => (
  <div className="h-6 w-1/3">
    <div className="pb-1 flex justify-start items-center">
      <div className="mr-3 w-4">
        <Icon src={Phone} />
      </div>
      <div className="font-lato text-xs text-black">+421 905 271 220</div>
    </div>
    <div className="pb-1 flex justify-start items-center">
      <div className="mr-3 w-8 lg:w-4">
        <Icon src={Email} />
      </div>
      <div className="font-lato text-xs">
        <a
          href="mailto:chatkosice@gmail.com"
          className="no-underline text-black"
        >
          chatkosice@gmail.com
        </a>
      </div>
    </div>
  </div>
);

export default Contacts;
