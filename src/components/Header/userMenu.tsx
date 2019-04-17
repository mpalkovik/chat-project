import React, { FC } from "react";
import styled from "@emotion/styled";
import { black } from "../../style/colors";

const Wrapper = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: inline-block;
  }
`;

const UserToggleMenu = styled.span`
  font-family: Gilbert;
  font-size: 18px;
  font-weight: bold;
  color: ${black};
`;

const UserMenu: FC = () => (
  <Wrapper>
    <UserToggleMenu>FS</UserToggleMenu>
  </Wrapper>
);

export default UserMenu;
