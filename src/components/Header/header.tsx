import React, { FC } from "react";
import styled from "@emotion/styled";
// import chatImg from "../../static/png/g";
import { RouteComponentProps } from "@reach/router";
import Menu from "../Header/menu";
import UserButton from "./userButton";

const Wrapper = styled.div`
  width: 100%;
`;

const ComponentWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Chat = styled.img``;

const Header: FC<RouteComponentProps> = () => (
  <Wrapper>
    <ComponentWrapper>
      <Menu />
      {/* <Chat src={chatImg} /> */}
      <UserButton />
    </ComponentWrapper>
  </Wrapper>
);

export default Header;
