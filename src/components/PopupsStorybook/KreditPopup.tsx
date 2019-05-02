import React from "react";
import XButton from "../../components/XButton/XButton";
import Message from "../../components/Message/Message";
import InfoMessage from "../../components/InfoMessage/InfoMessage";
import PopupButton from "../../components/PopupButton/PopupButton";
import Modal from "../PopupsMobile/PopupsMobile";

const KreditPopup = () => (
  <Modal>
    <div>
      <XButton />
      <Message text="Ooops…" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov aby ste sa mohli prihlási’t na zvolenú arteterapiu." />
    </div>
    <div>
      <PopupButton text="Nákup kreditov" backgroundColor="black" />
    </div>
  </Modal>
);

export default KreditPopup;
