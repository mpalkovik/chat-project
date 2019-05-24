import React from "react";
import styled from "@emotion/styled";
import background from "../../static/svg/backgroundImage.svg";
import { AllArticles } from "./AllArticles";
import { BackgroundImage } from "../Homepage/BackgroundImage";
import { Description } from "../Description/Description";
import { DescAndButton } from "../Description/DescrAndButton";

const DescriptionWrapper = styled.div`
  width: 85%;
  margin: auto;
  text-align: center;
  padding-top: 10px;
`;
export const Container = () => (
  <BackgroundImage url={background} isCover>
    <DescriptionWrapper>
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </DescriptionWrapper>
    <AllArticles />
    <DescriptionWrapper>
      <DescAndButton />
    </DescriptionWrapper>
  </BackgroundImage>
);
