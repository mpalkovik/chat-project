import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import PopupButton from "../PopupButton";
import MainPopup from "../MainPopup";

const KreditPopup = () => (
  <MainPopup>
    <div>
      <XButton />
      <Message text="Ooops…" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov aby ste sa mohli prihlási’t na zvolenú arteterapiu." />
    </div>
    <div>
      <PopupButton text="Nákup kreditov" backgroundColor="black" />
    </div>
  </MainPopup>
);

export default KreditPopup;
