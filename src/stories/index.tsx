import React from "react";
import { storiesOf } from "@storybook/react";
import KreditPopup from "../components/PopupsStorybook/KreditPopup";
import ErrorPopup from "../components/PopupsStorybook/ErrorPopup";
import RegistrationPopup from "../components/PopupsStorybook/RegistrationPopup";
import DisprovePopup from "../components/PopupsStorybook/DisprovePopup";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("PopupsMobile", module)
  .add("KreditPopup", () => <KreditPopup />)
  .add("RegistrationPopup", () => <RegistrationPopup />)
  .add("DisprovePopup", () => <DisprovePopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
