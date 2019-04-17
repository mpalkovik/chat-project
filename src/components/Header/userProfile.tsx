import React, { FC } from "react";
import styled from "@emotion/styled";
import { aquaBlue, black } from "../../style/colors";

const Wrapper = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: inline-block;
  }
`;

const UserName = styled.div`
  height: 20px;
  font-family: Gilbert;
  font-size: 16px;
  font-weight: bold;
  color: ${black};
`;

const Credit = styled.div`
  font-family: Lato;
  font-size: 10px;
  font-weight: bold;
  color: ${aquaBlue};
`;

const UserProfile: FC = () => (
  <Wrapper>
    <UserName>Feri Schwartzeneger</UserName>
    <Credit>Kredit 10 €</Credit>
  </Wrapper>
);

export default UserProfile;
