import React from "react";
import { storiesOf } from "@storybook/react";
import { Example } from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import icon from "../components/Thumbnail/homer.svg";
import { Thumbnail } from "../components/Thumbnail/Thumbnail";
import { Image } from "../components/Thumbnail/Image";
import { Name } from "../components/Thumbnail/Name";
import { Description } from "../components/Thumbnail/Description";
import { Button } from "../components/Thumbnail/Button";

storiesOf("Example", module).add("example", () => <Example />);

storiesOf("ThumbnailTherapy", module)
  .add("Therapy", () => <Thumbnail />)
  .add("Image", () => <Image icon={icon} />)
  .add("Name", () => <Name text="MAMA CHAT" />)
  .add("Description", () => (
    <Description text="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]" />
  ))
  .add("Button", () => <Button text="Zistiť viac" />);
