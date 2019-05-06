import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import Button from "../Button";
import TextUnderButton from "../TextUnderButton";
import Index from "../Index";

const ErrorPopup = () => (
  <Index>
    <div>
      <XButton />
      <Message text="Chystáte sa zrušiť rezerváciu" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
    </div>
    <div>
      <Button text="Nákup kreditov" backgroundColor="red" />
      <TextUnderButton
        text="Z hodiny sa môžte odhlásiť do 24 hodín pred jej začiatkom
a kredity Vám budú vrátené."
      />
    </div>
  </Index>
);

export default ErrorPopup;
