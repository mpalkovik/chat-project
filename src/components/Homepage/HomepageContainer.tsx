import React, { FC } from "react";
import styled from "@emotion/styled";
import Text from "../Text";
import HomepageList from "./HomepageList";
import Button from "../Button";

const Wrapper = styled.div`
  background-color: grey;
  width: 100%;
`;
const DescrWrapper = styled.div`
  @media (min-width: 840px) {
    padding: 3em 22em 3em 22em;
  }
  padding: 3em 1.5em 3em 1.5em;
`;
const ButtonWrapper = styled.div`
  width: 163px;
  height: 40px;
  padding-top: 1.5em;
  margin: 0 auto;
`;
const Container: FC = () => (
  <Wrapper>
    <DescrWrapper>
      <Text
        fontSize={36}
        fontFamily="Gilbert"
        text="CHAT je unikátnym
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
    </DescrWrapper>
    <HomepageList />
    <DescrWrapper>
      <Text
        fontSize={36}
        fontFamily="Gilbert"
        text="Vyskúšajte si CHAT.
        Registrujte sa a získajte
        prvú hodinu zdarma."
      />
      <ButtonWrapper>
        <Button text="Registrovať sa" backgroundColor="black" />
      </ButtonWrapper>
    </DescrWrapper>
  </Wrapper>
);
export default Container;
