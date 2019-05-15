import React from "react";
import { List } from "./List";
import { Button } from "./Button";
import { Description } from "./Description";
import { Logo } from "./Logo";
import styled from "@emotion/styled";
import background from "../../static/svg/backgroundImage.svg";

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const LandingPageWrapper = () => (
  <BackgroundImage>
    <div className="pt-4 pb-24">
      <Logo />
    </div>
    <div className="descriptionWrapper lg:w-3/5">
      <Description>
        CHAT je unikátnym medzinárodným arteterapeutickým centrom v Košiciach
        pre deti, mládež a dospelých, ktoré sa zaoberá liečbou umením použitím
        nielen tradičných foriem umenia, ale aj digitálneho umenia.
      </Description>
    </div>
    <List />
    <div className="descriptionWrapper lg:w-3/5">
      <Description>
        Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.
      </Description>
      <div className="w-48 m-auto mt-6 bg-black rounded-lg">
        <Button>Registrovať sa</Button>
      </div>
    </div>
  </BackgroundImage>
);
