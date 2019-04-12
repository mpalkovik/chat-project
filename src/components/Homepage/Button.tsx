import React, { FC } from "react";
import * as colors from "../../style/colors";
import styled from "@emotion/styled";

interface IProps {
  text: string;
  backgroundColor?: "black" | "white";
}

const ButtonStyle = styled.div`
  width: 239px;
  height: 40px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1.5px solid ${colors.black};
  margin-top: 48px;
`;

const Text = styled.span`
  font-family: Lato, serif;
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  color: ${colors.black};
`;

const Button: FC<IProps> = ({ text, backgroundColor = "black" }) => (
  <ButtonStyle color={colors[backgroundColor]}>
    <Text>{text}</Text>
  </ButtonStyle>
);

export default Button;
