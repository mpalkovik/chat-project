import React, { FC } from "react";
import styled from "@emotion/styled";
import userIcon from "../../static/svg/userIcon.svg";
import { paleLilac } from "../../style/colors";
import ImageHeader from "./imageHeader";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${paleLilac};
  margin-right: 16px;
`;

const UserButton: FC = () => (
  <Background>
    <ImageHeader src={userIcon} width={16} height={16} />
  </Background>
);

export default UserButton;
