import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "@emotion/styled";
import Logo from "./Logo";
import ICO from "./ICO";
import Contacts from "./Contacts";
import Location from "./Location";

const Wrapper = styled.div`
  height: 400px;
`;

const Footer: FC<RouteComponentProps> = () => (
  <Wrapper className="bg-maize  ">
    <Logo />
    <div className="lg:flex">
      <div className="pb-6 ">
        <ICO />
      </div>

      <div className="flex pt-5 ">
        <Location />
        <Contacts />
      </div>
    </div>
  </Wrapper>
);

export default Footer;
