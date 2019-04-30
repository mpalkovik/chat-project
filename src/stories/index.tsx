import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import Header from "../components/Header/Header";
import {
  XlargeWrapper,
  MediumWrapper,
  LargeWrapper,
  SmallWrapper
} from "../components/Screens";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Header", module).add("desktop version", () => (
  <XlargeWrapper>
    <Header />
  </XlargeWrapper>
));

storiesOf("Header", module).add("notebook version", () => (
  <LargeWrapper>
    <Header />
  </LargeWrapper>
));

storiesOf("Header", module).add("tablet version", () => (
  <MediumWrapper>
    <Header />
  </MediumWrapper>
));

storiesOf("Header", module).add("mobile version", () => (
  <SmallWrapper>
    <Header />
  </SmallWrapper>
));
