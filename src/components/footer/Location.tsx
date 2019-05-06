import React from "react";
import { Icon } from "../Icon";
import Place from "../../static/svg/icon-place.svg";

export const Location = () => (
  <div className="ml-6 mr-4 lg:pr-12 lg:pl-8 w-1/2 ">
    <div className="flex w-48 justify-start items-center">
      <div className="mr-3 w-6 flex items-start h-10 ">
        <Icon src={Place} />
      </div>
      <div className="text-black font-normal font-lato text-xs w-64 h-10">
        <div>Strojárenská 3,</div>
        <div>budova č.4, 4. poschodie</div>
        <div>Kosice, Slovakia</div>
      </div>
    </div>
  </div>
);
