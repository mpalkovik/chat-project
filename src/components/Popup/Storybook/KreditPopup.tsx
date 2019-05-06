import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import Button from "../Button";
import Index from "../Index";

const KreditPopup = () => (
  <Index>
    <div>
      <XButton />
      <Message text="Ooops…" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov aby ste sa mohli prihlási’t na zvolenú arteterapiu." />
    </div>
    <div>
      <Button text="Nákup kreditov" backgroundColor="black" />
    </div>
  </Index>
);

export default KreditPopup;
