import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "@emotion/styled";
import HomepageContainer from "./HomepageContainer";

const Wrapper = styled.div``;
const Container: FC<RouteComponentProps> = () => (
  <Wrapper>
    <HomepageContainer />
  </Wrapper>
);
export default Container;
