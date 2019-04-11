import React, { FC } from "react";
import styled from "@emotion/styled";
import menuIcon from "../../static/svg/menu.svg";

const ImageMenu = styled.img`
  width: 64px;
  height: 64px;
  margin-left: 16px;
`;

const Menu: FC = () => <ImageMenu src={menuIcon} />;

export default Menu;
