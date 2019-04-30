import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import Homepage from "../components/Homepage/Container";
import "../style/index.css";
import "../style/fonts.css";
storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Homepage", module).add("desktop version", () => (
  <div className="w-full">
    <Homepage />
  </div>
));
storiesOf("Homepage", module).add("mobile version", () => (
  <div className="w-">
    <Homepage />
  </div>
));