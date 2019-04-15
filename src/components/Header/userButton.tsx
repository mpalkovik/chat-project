import React, { FC } from "react";
import styled from "@emotion/styled";
import userIcon from "../../static/svg/userIcon.svg";
import { paleLilac } from "../../style/colors";
import ImageHeader from "./imageHeader";

const Background = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${paleLilac};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  @media (min-width: 920px) {
    display: none;
  }
`;

const UserButton: FC = () => (
  <Background>
    <Wrapper>
      <ImageHeader src={userIcon} width={16} height={16} />
    </Wrapper>
  </Background>
);

export default UserButton;
