import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header/Header";
import { Schedule } from "../components/Schedule/Schedule";
import "../style/index.css";
import "../style/fonts.css";
import { Footer } from "../components/footer";

storiesOf("Footer", module).add("footer", () => <Footer />);
storiesOf("Popups", module)
  .add("CreditPopup", () => <CreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
storiesOf("Header", module).add("Header", () => <Header />);
storiesOf("Schedule", module).add("Schedule", () => <Schedule />);
