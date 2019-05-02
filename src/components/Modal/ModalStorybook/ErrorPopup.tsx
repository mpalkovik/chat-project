import React from "react";
import XButton from "../XButton";
import Message from "../Message";
import InfoMessage from "../InfoMessage";
import ModalButton from "../ModalButton";
import TextUnderButton from "../TextUnderButton";
import Modal from "../MainModal";

const ErrorModal = () => (
  <Modal>
    <div>
      <XButton />
      <Message text="Chystáte sa zrušiť rezerváciu" />
      <InfoMessage text="BABY CHAT - 15:30, 28.január 2019" />
    </div>
    <div>
      <ModalButton text="Nákup kreditov" backgroundColor="red" />
      <TextUnderButton />
    </div>
  </Modal>
);

export default ErrorModal;
