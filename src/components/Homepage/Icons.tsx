import React, { FC } from "react";
import * as colors from "../../style/colors";
import styled from "@emotion/styled";

interface IProps {
  src: string;
  backgroundColor?:
    | "aquaBlue"
    | "butterScotch"
    | "pinkyPurple"
    | "shamrockGreen";
}
const Wrapper = styled.div`
  width: 113px;
  height: 120px;
  margin-top: 32px;
`;
const IconWrapper = styled.span`
  width: 98.8px;
  height: 89.4px;
  display: inline-block;
  text-align: center;
  background-color: ${props => props.color};
`;

const Icons: FC<IProps> = ({ src, backgroundColor = "aquaBlue" }) => (
  <Wrapper>
    <IconWrapper color={colors[backgroundColor]}>
      <img src={src} />
    </IconWrapper>
  </Wrapper>
);
export default Icons;
