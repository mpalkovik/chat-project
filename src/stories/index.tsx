import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
<<<<<<< HEAD
import "../main.css";
import Therapy from "../components/thumbnailTherapy/Therapy";
import TherapyName from "../components/thumbnailTherapy/TherapyName/TherapyName";
import TherapyDescription from "../components/thumbnailTherapy/TherapyDescription/TherapyDescription";
import TherapyButton from "../components/thumbnailTherapy/TherapyButton/TherapyButton";
import TherapyImage from "../components/thumbnailTherapy/TherapyImage/TherapyImage";
=======
import "../style/index.css";
import "../style/fonts.css";
>>>>>>> 79eb349fabe1a37c170c6fed019f035fb48a7377

storiesOf("Example", module).add("example", () => <Example />);

// Styories of Thumbnail Therapy
storiesOf("ThumbnailTherapy", module)
  .add("Therapy", () => <Therapy />)
  .add("Image", () => <TherapyImage />)
  .add("Name", () => <TherapyName />)
  .add("Description", () => <TherapyDescription />)
  .add("Button", () => <TherapyButton />);
