import React, { FC } from "react";
import * as colors from "../style/colors";
import styled from "@emotion/styled";

interface IProps {
  text: string;
  backgroundColor?: "black" | "orangeRed" | "shamrockGreen";
}

const ButtonStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const Text = styled.span`
  font-family: Lato, serif;
  font-size: 16px;
  font-weight: 900;
  font-style: normal;
  color: ${colors.white};
`;

export const ButtonExample: FC<IProps> = ({
  text,
  backgroundColor = "black"
}) => (
  <ButtonStyle color={colors[backgroundColor]}>
    <Text>{text}</Text>
  </ButtonStyle>
);
