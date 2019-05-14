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
export const LandingPage = () => (
  <BackgroundImage>
    <Logo />
    <div className="w-5/6 m-auto text-center pt-24 pb-24 lg:w-3/5">
      <Description
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
    </div>
    <List />
    <div className="w-5/6 m-auto text-center pt-24 pb-24 lg:w-3/5">
      <Description
        text="Vyskúšajte si CHAT.
        Registrujte sa a získajte
        prvú hodinu zdarma."
      />
      <div className="w-48 m-auto mt-6 bg-black rounded-lg">
        <Button text="Registrovať sa" className="font-lato font-bold text-white" />
      </div>
    </div>
  </BackgroundImage>
);
