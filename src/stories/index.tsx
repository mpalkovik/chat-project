import React from "react";
import { storiesOf } from "@storybook/react";
import { CreditPopup } from "../components/Popup/Storybook/CreditPopup";
import { ErrorPopup } from "../components/Popup/Storybook/ErrorPopup";
import { RegistrationPopup } from "../components/Popup/Storybook/RegistrationPopup";
import { CancelReservationPopup } from "../components/Popup/Storybook/CancelReservationPopup";
import { Header } from "../components/Header/Header";
import icon from "../components/Thumbnail/homer.svg";
import { Thumbnail } from "../components/Thumbnail/Thumbnail";
import { Image } from "../components/Thumbnail/Image";
import { Name } from "../components/Thumbnail/Name";
import { Description } from "../components/Thumbnail/Description";
import { Button } from "../components/Thumbnail/Button";
import { Footer } from "../components/footer";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("ThumbnailTherapy", module)
  .add("Therapy", () => (
    <Thumbnail
      name="MAMA CHAT"
      icon={icon}
      alt="super"
      description="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]"
      button="Zistiť viac"
    />
  ))
  .add("Image", () => <Image icon={icon} alt="super" />)
  .add("Name", () => <Name text="MAMA CHAT" />)
  .add("Description", () => (
    <Description text="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]" />
  ))
  .add("Button", () => <Button text="Zistiť viac" />);
storiesOf("Footer", module).add("footer", () => <Footer />);
storiesOf("Popups", module)
  .add("CreditPopup", () => <CreditPopup />)
  .add("RegistrationModal", () => <RegistrationPopup />)
  .add("CancelReservation", () => <CancelReservationPopup />)
  .add("ErrorPopup", () => <ErrorPopup />);
storiesOf("Header", module).add("Header", () => <Header />);
