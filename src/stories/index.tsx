import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import Therapy from "../components/thumbnailTherapy/Therapy";
import TherapyName from "../components/thumbnailTherapy/TherapyName/TherapyName";
import TherapyDescription from "../components/thumbnailTherapy/TherapyDescription/TherapyDescription";
import TherapyButton from "../components/thumbnailTherapy/TherapyButton/TherapyButton";
import TherapyImage from "../components/thumbnailTherapy/TherapyImage/TherapyImage";
import icon from "../components/thumbnailTherapy/TherapyImage/homer.svg";

storiesOf("Example", module).add("example", () => <Example />);

storiesOf("ThumbnailTherapy", module)
  .add("Therapy", () => <Therapy />)
  .add("Image", () => <TherapyImage icon={icon} />)
  .add("Name", () => <TherapyName text="MAMA CHAT" />)
  .add("Description", () => (
    <TherapyDescription text="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]" />
  ))
  .add("Button", () => <TherapyButton text="Zistiť viac" />);
