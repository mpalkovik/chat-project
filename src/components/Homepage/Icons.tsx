import React, { FC } from "react";
import * as colors from "../../style/colors";
import styled from "@emotion/styled";

interface IProps {
  src: string;
  title: string;
  backgroundColor?:
    | "aquaBlue"
    | "butterScotch"
    | "pinkyPurple"
    | "shamrockGreen";
}
const Wrapper = styled.div`
  padding: 24px;
`;
const IconWrapper = styled.div`
  width: 100%;
  height: 130px;
  text-align: center;
`;
const IconBackground = styled.span`
  width: 98.8px;
  height: 89.4px;
  display: inline-block;
  background-color: ${props => props.color};
`;
const Title = styled.div`
  width: 100%;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.38;
  text-align: center;
  color: ${colors.black};
`;
const Icons: FC<IProps> = ({
  src,
  title,
  to,
  backgroundColor = "aquaBlue"
}) => (
  <Wrapper to={to}>
    <IconWrapper>
      <IconBackground color={colors[backgroundColor]}>
        <img src={src} />
      </IconBackground>
    </IconWrapper>
    <Title>{title}</Title>
  </Wrapper>
);
export default Icons;
