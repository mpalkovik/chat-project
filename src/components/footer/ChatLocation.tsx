import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import Place from "../icons/Place";

const LocationDiv = styled.div`
  width: 145px;
  height: 36px;
  display: inline-block;
  padding-left: 24px;
  padding-right: 24px;
`;

const InlineDiv = styled.div`
  display: inline-block;
`;

const Lato = styled.div`
  font-size: 12px;
  font-family: Lato;
  font-weight: normal;
  font-style: normal;
  font-color: black;
  display: inline-block;
`;

const ChatLocation: FC<RouteComponentProps> = () => (
  <LocationDiv>
    <InlineDiv>
      <Place />
    </InlineDiv>{" "}
    <Lato>
      Strojárenská 3,
      <br />
      budova č.4, 4. poschodie
      <br />
      Kosice, Slovakia
    </Lato>
  </LocationDiv>
);

export default ChatLocation;
