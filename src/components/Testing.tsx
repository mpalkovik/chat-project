import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "./Header/Header";
// import styled from "@emotion/styled";
// import ButtonExample from "./ButtonExample";

// const Wrapper = styled.div`
//   width: 295px;
//   margin: 0 auto;
// `;

const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Header />
    {/* <Wrapper>
      <ButtonExample text="Nákup kreditov" backgroundColor="black" />
      <ButtonExample text="Nákup kreditov" backgroundColor="orangeRed" />
      <ButtonExample text="Nákup kreditov" backgroundColor="shamrockGreen" />
      <div className="p-4 bg-red border-red-dark border border-solid font-gilbert">
        test tailwind
      </div>
    </Wrapper> */}
  </div>
);

export default Testing;
