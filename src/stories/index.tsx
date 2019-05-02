import React from "react";
import { storiesOf } from "@storybook/react";
import {
  SmallWrapper,
  MediumWrapper,
  LargeWrapper,
  XlargeWrapper
} from "../components/Screens";
import Example from "../components/Example";
import Homepage from "../components/Home";
import "../style/index.css";
import "../style/fonts.css";
storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Homepage", module).add("desktop version", () => (
  <XlargeWrapper>
    <Homepage />
  </XlargeWrapper>
));
storiesOf("Homepage", module).add("notebook version", () => (
  <LargeWrapper>
    <Homepage />
  </LargeWrapper>
));
storiesOf("Homepage", module).add("tablet version", () => (
  <MediumWrapper>
    <Homepage />
  </MediumWrapper>
));
storiesOf("Homepage", module).add("mobile version", () => (
  <SmallWrapper>
    <Homepage />
  </SmallWrapper>
));
