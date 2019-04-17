import React, { FC } from "react";
import styled from "@emotion/styled";
import userIcon from "../../static/svg/userIcon.svg";
import { paleLilac } from "../../style/colors";
import ImageHeader from "./imageHeader";
import UserProfile from "./userProfile";
import UserMenu from "./userMenu";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 920px) {
    .userIcon {
      display: none;
    }
    width: 194px;
    margin-right: 40px;
  }
`;

const Background = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 12px;
  background: ${paleLilac};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserButton: FC = () => (
  <Wrapper>
    <Background>
      <UserMenu />
      <ImageHeader src={userIcon} width={16} height={16} className="userIcon" />
    </Background>
    <UserProfile />
  </Wrapper>
);

export default UserButton;
