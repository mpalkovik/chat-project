import React from "react";
import XButton from "../../components/XButton/XButton";
import Message from "../../components/Message/Message";
import InfoMessage from "../../components/InfoMessage/InfoMessage";
import PopupButton from "../../components/PopupButton/PopupButton";
import TextUnderButton from "../../components/TextUnderButton/TextUnderButton";
import Modal from "../../components/PopupsMobile/PopupsMobile";

const ErrorModal = () => (
  <Modal>
    <div>
      <XButton />
      <Message text="Záväzná registrácia" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
    </div>
    <div>
      <PopupButton text="Nákup kreditov" backgroundColor="green" />
      <TextUnderButton />
    </div>
  </Modal>
);

export default ErrorModal;
