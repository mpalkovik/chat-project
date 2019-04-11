import React, { FC } from "react";
import styled from "@emotion/styled";
import userIcon from "../../static/svg/userIcon.svg";

const Background = styled.span`
  border-radius: 12px;
  background: black;
`;

const UserImage = styled.img`
  width: 16px;
  height: 16px;
  float: right;
  margin-right: 16px;
`;

const UserButton: FC = () => (
  <Background>
    <UserImage src={userIcon} />
  </Background>
);

export default UserButton;
