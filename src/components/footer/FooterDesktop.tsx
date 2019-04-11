import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import ChatLogo from "./ChatLogo";
import ChatICO from "./ChatICO";
import ChatLocation from "./ChatContacts";
import ChatContacts from "./ChatLocation";

const FooterDiv = styled.div`
  height: 229px;
  width: 1024px;
  background-color: #ffc450;
  padding-top: 450px;
  padding-left: 44px;
`;

const FooterInfoHandler = styled.div`
  display: flex;
`;

const Footer: FC<RouteComponentProps> = () => (
  <FooterDiv>
    <div style={{ width: "1024px" }}>
      <ChatLogo />
    </div>
    <FooterInfoHandler>
      <ChatICO />
      <ChatContacts />
      <ChatLocation />
    </FooterInfoHandler>
  </FooterDiv>
);

export default Footer;
