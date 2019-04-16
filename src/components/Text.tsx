import React, { FC } from "react";
import styled from "@emotion/styled";

interface IProps {
  text: string;
  fontSize: number;
  fontFamily: string;
}
const Title = styled.div`
  width: 100%;
  line-height: 1.38;
  text-align: center;
  color: black;
`;

const Text: FC<IProps> = ({ text, fontSize, fontFamily }) => (
  <div>
    <Title style={{ fontSize, fontFamily }}>{text}</Title>
  </div>
);
export default Text;
