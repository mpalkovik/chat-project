import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import { ButtonExample } from "./ButtonExample";

const Wrapper = styled.div`
  width: 295px;
  margin: 0 auto;
`;

export const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Wrapper>
      <ButtonExample text="Nákup kreditov" backgroundColor="black" />
      <ButtonExample text="Nákup kreditov" backgroundColor="orangeRed" />
      <ButtonExample text="Nákup kreditov" backgroundColor="shamrockGreen" />
      <div className="p-4 bg-red border-red-dark border border-solid font-gilbert">
        test tailwind
      </div>
    </Wrapper>
  </div>
);
