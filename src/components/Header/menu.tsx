import React, { FC } from "react";
import menuIcon from "../../static/svg/menu.svg";
import ImageHeader from "./imageHeader";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  @media (min-width: 920px) {
    display: none;
  }
`;

const Menu: FC = () => (
  <Wrapper>
    <ImageHeader src={menuIcon} marginLeft={16} />
  </Wrapper>
);

export default Menu;
