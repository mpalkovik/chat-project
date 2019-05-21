import React from "react";
import { List } from "./List";
import { Button } from "./Button";
import { Description } from "./Description";
import { Logo } from "./Logo";
import { DescriptionWrapper } from "./DescriptionWrapper";
import { BackgroundImage } from "./BackgroundImage";
import { Artetherapies } from "./Artetherapies";
import background from "../../static/svg/backgroundImage.svg";

export const LandingPageWrapper = () => {
  return (
    <BackgroundImage url={background} isCover>
      <div className="pt-4 pb-24">
        <Logo />
      </div>
      <DescriptionWrapper>
        <Description>
          CHAT je unikátnym medzinárodným arteterapeutickým centrom v Košiciach
          pre deti, mládež a dospelých, ktoré sa zaoberá liečbou umením použitím
          nielen tradičných foriem umenia, ale aj digitálneho umenia.
        </Description>
      </DescriptionWrapper>
      <List />
      <DescriptionWrapper>
        <Description>
          Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.
        </Description>
        <div className="w-48 m-auto mt-6 bg-black rounded-lg">
          <Button>Registrovať sa</Button>
        </div>
      </DescriptionWrapper>
      <Artetherapies />
    </BackgroundImage>
  );
};
