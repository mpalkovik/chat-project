import React from "react";
import { storiesOf } from "@storybook/react";
import KreditPopup from "../components/Popup/Storybook/KreditPopup";
import ErrorPopup from "../components/Popup/Storybook/ErrorPopup";
import RegistrationPopup from "../components/Popup/Storybook/RegistrationPopup";
import CancelReservationPopup from "../components/Popup/Storybook/CancelReservationPopup";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Popups", module)
  .add("KreditPopup", () => <KreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
