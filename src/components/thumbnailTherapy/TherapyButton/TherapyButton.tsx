import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  width: 214px;
  height: 40px;
  border-style: none;
  border-radius: 12px;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  background-color: var(--white);
  margin: 16px 8px;
  border-radius: 12px;
  font-weight: bold;
  :hover {
    background-color: #333333;
    color: white;
  }
  cursor: pointer;
`;

const TherapyButton = () => {
  return <Button>Zistiť viac</Button>;
};

export default TherapyButton;
