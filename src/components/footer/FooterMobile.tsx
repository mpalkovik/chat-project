import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import ChatLogo from "./ChatLogo";
import ChatICO from "./ChatICO";
import ChatLocation from "./ChatContacts";
import ChatContacts from "./ChatLocation";

const FooterDiv = styled.div`
  height: 270px;
  width: 375px;
  background-color: #ffc450;
  padding-top: 200px;
`;

const Footer: FC<RouteComponentProps> = () => (
  <div>
    <FooterDiv>
      <ChatLogo />
      <ChatICO />
      <div style={{ paddingTop: "24px" }}>
        <ChatContacts />
        <ChatLocation />
      </div>
    </FooterDiv>
  </div>
);

export default Footer;
