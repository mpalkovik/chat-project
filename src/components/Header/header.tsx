import React, { FC } from "react";
import styled from "@emotion/styled";
import chatImg from "../../static/svg/chatLogo.png";
import Menu from "../Header/menu";
import UserButton from "./userButton";
import { paleLilac } from "../../style/colors";
import ImageHeader from "./imageHeader";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  @media (min-width: 920px) {
    height: 48px;
    .chatLogo {
      order: -1;
      margin-left: 48px;
    }
  }
`;

const Divider = styled.div`
  background: ${paleLilac};
  height: 1px;
`;

const Header: FC = () => (
  <div>
    <Wrapper>
      <Menu />
      <ImageHeader src={chatImg} width={73} height={27} className="chatLogo" />
      <UserButton />
    </Wrapper>
    <Divider />
  </div>
);

export default Header;
