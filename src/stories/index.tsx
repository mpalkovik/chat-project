import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer";
import { Home } from "../components/Home";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Home", module).add("Home", () => <Home />);
storiesOf("Footer", module).add("Footer", () => <Footer />);
storiesOf("Popups", module)
  .add("CreditPopup", () => <CreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
storiesOf("Header", module).add("Header", () => <Header />);
