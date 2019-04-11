import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import Phone from "../icons/Phone";
import Email from "../icons/Email";

const InlineDiv = styled.div`
  display: inline-block;
`;

const ContactsContainer = styled.div`
  width: 140px;
  height: 50px;
  display: inline-block;
`;

const Contacts = styled.div`
  font-family: Lato;
  font-size: 12px;
  font-color: black;
  display: inline-block;
`;

const ChatContacts: FC<RouteComponentProps> = () => (
  <ContactsContainer>
    <InlineDiv>
      <Phone />
    </InlineDiv>
    <Contacts>+421 905 271 220</Contacts>
    <br />
    <InlineDiv>
      <Email />
    </InlineDiv>
    <Contacts>chatkosice@gmail.com</Contacts>
  </ContactsContainer>
);

export default ChatContacts;
