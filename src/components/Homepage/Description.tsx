import React, { FC } from "react";
import styled from "@emotion/styled";

interface IProps {
  description: string;
}
const DescrWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
const Descr = styled.p`
  width: 328px;
  height: 163px;
  font-family: Lato;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: black;
`;
const Description: FC<IProps> = ({ description }) => (
  <DescrWrapper>
    <Descr>{description}</Descr>
  </DescrWrapper>
);
export default Description;
