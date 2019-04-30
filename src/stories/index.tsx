import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import Homepage from "../components/Homepage/HomepageContainer";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Homepage", module).add("homepage", () => <Homepage />);
storiesOf("Homepage", module).add("responsive homepage", () => (
  <div className="w-">
    <Homepage />
  </div>
));
