import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "@emotion/styled";
import Description from "./Description";
import HomepageList from "./HomepageList";
import Button from "../Button";

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 20%;
  height: 250px;
  background-color: white;
`;
const ButtonWrapper = styled.div`
  width: 163px;
  height: 40px;
  margin: auto;
`;
const HomepageScreen: FC<RouteComponentProps> = () => (
  <div>
    <Description
      description="CHAT je unikátnym
medzinárodným
arteterapeutickým
centrom v Košiciach
pre deti, mládež
a dospelých,
ktoré sa zaoberá
liečbou umením
použitím nielen
tradičných foriem
umenia, ale aj
digitálneho umenia."
    />
    <HomepageList />
    <ContentWrapper>
      <Description
        description="Vyskúšajte si CHAT.
Registrujte sa a získajte
prvú hodinu zdarma."
      />
      <ButtonWrapper>
        <Button text="Registrovať sa" backgroundColor="black" />
      </ButtonWrapper>
    </ContentWrapper>
  </div>
);
export default HomepageScreen;
