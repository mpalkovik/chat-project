import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import ModalButton from "../ModalButton";
import Modal from "../MainModal";

const KreditPopup = () => (
  <Modal>
    <div>
      <XButton />
      <Message text="Ooops…" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov aby ste sa mohli prihlási’t na zvolenú arteterapiu." />
    </div>
    <div>
      <ModalButton text="Nákup kreditov" backgroundColor="black" />
    </div>
  </Modal>
);

export default KreditPopup;
