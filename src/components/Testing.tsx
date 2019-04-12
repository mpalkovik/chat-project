import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import Button from "./Button";

const Wrapper = styled.div`
  width: 295px;
  margin: 0 auto;
`;

const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Wrapper>
      <Button text="Nákup kreditov" backgroundColor="black" />
      <Button text="Nákup kreditov" backgroundColor="orangeRed" />
      <Button text="Nákup kreditov" backgroundColor="shamrockGreen" />
    </Wrapper>
  </div>
);

export default Testing;
