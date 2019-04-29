import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../main.css";
import Therapy from "../components/thumbnailTherapy/Therapy";
import TherapyName from "../components/thumbnailTherapy/TherapyName/TherapyName";
import TherapyDescription from "../components/thumbnailTherapy/TherapyDescription/TherapyDescription";
import TherapyButton from "../components/thumbnailTherapy/TherapyButton/TherapyButton";
import TherapyImage from "../components/thumbnailTherapy/TherapyImage/TherapyImage";

storiesOf("Example", module).add("example", () => <Example />);

// Styories of Thumbnail Therapy
storiesOf("ThumbnailTherapy", module)
  .add("Therapy", () => <Therapy />)
  .add("Image", () => <TherapyImage />)
  .add("Name", () => <TherapyName />)
  .add("Description", () => <TherapyDescription />)
  .add("Button", () => <TherapyButton />);
