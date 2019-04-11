import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import iconChildren from "../../static/svg/icon-therapy-type-deti-do-3-rokov.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.span`
  display: inline-block;
  text-align: center;
  width: 98.8px;
  height: 89.4px;
  background-color: #00b5e2;
`;

const Icons: FC<RouteComponentProps> = () => (
  <Wrapper>
    <IconWrapper>
      <img src={iconChildren} />
    </IconWrapper>
  </Wrapper>
);
export default Icons;
