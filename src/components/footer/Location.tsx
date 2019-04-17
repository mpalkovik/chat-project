import React, { FC } from "react";
import styled from "@emotion/styled";
import Icons from "../icons/Icons";
import Place from "../../static/svg/icon-place.svg";
import { black } from "../../style/colors";

const Street = styled.div`
  width: 172px;
  height: 36px;
`;

const ChatLocation: FC = () => (
  <div className="pl-6 pr-4 lg:pr-12 lg:pl-8">
    <div className="flex justify-start items-center">
      <div className="mr-3 w-4 flex items-start h-8 ">
        <Icons src={Place} />
      </div>
      <Street className="text-black font-normal font-lato text-xs">
        <div>Strojárenská 3,</div>
        <div>budova č.4, 4. poschodie</div>
        <div>Kosice, Slovakia</div>
      </Street>
    </div>
  </div>
);

export default ChatLocation;
