import React, { FC } from "react";
import styled from "@emotion/styled";
import { black } from "../../style/colors";
import { Link } from "@reach/router";

const Text = styled(Link)`
  font-family: Gilbert;
  font-size: 16px;
  padding-right: 30px;
  margin-top: 20px;
  font-weight: bold;
  color: ${black};
  display: inline-block;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: inline-block;
  }
`;

const Navigation: FC = () => (
  <Wrapper>
    <Text to="#">Arteterapie</Text>
    <Text to="#">Rozvrh</Text>
    <Text to="#">Clanky</Text>
  </Wrapper>
);

export default Navigation;
