import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Mapping } from "./ArticlePage/Mapping";
import styled from "@emotion/styled";
import background from "../static/svg/group-13.svg";

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
export const Testing: FC<RouteComponentProps> = () => (
  <BackgroundImage>
    <Mapping />
  </BackgroundImage>
);
