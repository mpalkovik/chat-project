import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header/Header";
import "../style/index.css";
import "../style/fonts.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Footer } from "../components/Footer";

storiesOf("Buttons", module).add("Button primary", () => (
  <Button isInverted>Button Primary</Button>
));
storiesOf("Buttons", module).add("Button primary stretched", () => (
  <Button isInverted stretched>
    Button Primary
  </Button>
));
storiesOf("Buttons", module).add("Button secondary", () => (
  <Button>Button Secondary</Button>
));
storiesOf("Buttons", module).add("Button secondary stretched", () => (
  <Button stretched>Button Secondary</Button>
));
storiesOf("Input", module).add("normal", () => (
  <Input name="Email" placeholder="Zadajte Váš email" />
));

storiesOf("Footer", module).add("footer", () => <Footer />);
storiesOf("Popups", module)
  .add("CreditPopup", () => <CreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
storiesOf("Header", module).add("Header", () => <Header />);
