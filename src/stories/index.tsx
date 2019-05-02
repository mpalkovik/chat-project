import React from "react";
import { storiesOf } from "@storybook/react";
import KreditPopup from "../components/Modal/ModalStorybook/KreditPopup";
import ErrorPopup from "../components/Modal/ModalStorybook/ErrorPopup";
import RegistrationPopup from "../components/Modal/ModalStorybook/RegistrationPopup";
import DisprovePopup from "../components/Modal/ModalStorybook/DisprovePopup";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Modal", module)
  .add("KreditModal", () => <KreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("DisproveModal", () => <DisprovePopup />)
  .add("ErrorModal", () => <ErrorPopup />);
