import React, { FC } from "react";
import styled from "@emotion/styled";
import chatImg from "../../static/svg/chatLogo.png";
import Menu from "../Header/menu";
import UserButton from "./userButton";
import { paleLilac } from "../../style/colors";
import ImageHeader from "./imageHeader";

const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Divider = styled.div`
  background: ${paleLilac};
  height: 1px;
`;

const Header: FC = () => (
  <div>
    <ComponentWrapper>
      <Menu />
      <ImageHeader src={chatImg} width={73} height={27} />
      <UserButton />
    </ComponentWrapper>
    <Divider />
  </div>
);

export default Header;
