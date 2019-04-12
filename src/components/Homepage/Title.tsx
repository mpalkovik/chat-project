import React, { FC } from "react";
import styled from "@emotion/styled";

interface IProps {
  title: string;
}
const TitleWrapper = styled.div`
  margin-top: 8px;
`;
const Titles = styled.div`
  height: 22px;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: black;
`;

const Title: FC<IProps> = ({ title }) => (
  <TitleWrapper>
    <Titles>{title}</Titles>
  </TitleWrapper>
);
export default Title;
