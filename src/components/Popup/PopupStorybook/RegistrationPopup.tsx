import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import PopupButton from "../PopupButton";
import TextUnderButton from "../TextUnderButton";
import MainPopup from "../MainPopup";

const RegistrationPopup = () => (
  <MainPopup>
    <div>
      <XButton />
      <Message text="Záväzná registrácia" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
    </div>
    <div>
      <PopupButton text="Nákup kreditov" backgroundColor="green" />
      <TextUnderButton
        text="Z hodiny sa môžte odhlásiť do 24 hodín pred jej začiatkom
a kredity Vám budú vrátené."
      />
    </div>
  </MainPopup>
);

export default RegistrationPopup;
