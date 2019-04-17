import React from "react";
import styled from "@emotion/styled";
import Icon from "../Icon";
import Place from "../../static/svg/icon-place.svg";

const Street = styled.div`
  width: 172px;
  height: 36px;
`;

const ChatLocation = () => (
  <div className="ml-6 mr-4 lg:pr-12 lg:pl-8 w-1/2 ">
    <div className="flex w-48 justify-start items-center">
      <div className="mr-3 w-4 flex items-start h-8 ">
        <Icon src={Place} />
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
