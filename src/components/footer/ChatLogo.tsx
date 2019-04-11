import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import test from "../static/svg/icon-power-off.svg";

const GilbertBold = styled.div`
  font-family: "Gilbert", serif;
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  font-color: #333333;
  padding-left: 24px;
  display: inline-block;
`;
const GilbertSmall = styled.div`
  font-family: "Gilbert", serif;
  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  text-align: left;
  font-color: #333333;
  display: inline-block;
`;

const ChatContainer = styled.div`
  width: 241px;
  height: 91px;
  padding-top: 30px;
`;

const ChatLogo: FC<RouteComponentProps> = () => (
  <div>
    <ChatContainer>
      <GilbertBold>CHAT</GilbertBold>
      <GilbertSmall>
        Centrum pre <br />
        kreatívnu liečbu <br />
        arteterapiou
      </GilbertSmall>
    </ChatContainer>
  </div>
);

export default ChatLogo;
