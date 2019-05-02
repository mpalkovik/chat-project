import React from "react";
import XButton from "../../components/XButton/XButton";
import Message from "../../components/Message/Message";
import InfoMessage from "../../components/InfoMessage/InfoMessage";
import PopupButton from "../../components/PopupButton/PopupButton";
import TextUnderButton from "../../components/TextUnderButton/TextUnderButton";
import Modal from "../../components/PopupsMobile/PopupsMobile";

const DisprovePopup = () => (
  <Modal>
    <div>
      <XButton />
      <Message text="Chystáte sa zrušiť rezerváciu" />
      <InfoMessage text="Na Vašom konte nemáte dostatok kreditov" />
    </div>
    <div>
      <PopupButton text="Nákup kreditov" backgroundColor="red" />
      <TextUnderButton />
    </div>
  </Modal>
);

export default DisprovePopup;
