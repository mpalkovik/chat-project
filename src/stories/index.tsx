import React from "react";
import { storiesOf } from "@storybook/react";
import KreditPopup from "../components/Popup/PopupStorybook/KreditPopup";
import ErrorPopup from "../components/Popup/PopupStorybook/ErrorPopup";
import RegistrationPopup from "../components/Popup/PopupStorybook/RegistrationPopup";
import CancelReservation from "../components/Popup/PopupStorybook/CancelReservation";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Popups", module)
  .add("KreditPopup", () => <KreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservation />)
  .add("ErrorPopup", () => <ErrorPopup />);
