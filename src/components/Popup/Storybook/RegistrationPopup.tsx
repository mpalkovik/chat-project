import React from "react";
import { CloseButton } from "../CloseButton";
import { Message } from "../Message";
import { InfoMessage } from "../InfoMessage";
import { Button } from "../Button";
import { TextUnderButton } from "../TextUnderButton";
import { Index } from "../Index";

export const RegistrationPopup = () => (
  <Index>
    <div>
      <CloseButton />
      <Message text="Záväzná registrácia" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
    </div>
    <div>
      <Button text="Nákup kreditov" backgroundColor="green" />
      <TextUnderButton
        text="Z hodiny sa môžte odhlásiť do 24 hodín pred jej začiatkom
a kredity Vám budú vrátené."
      />
    </div>
  </Index>
);
