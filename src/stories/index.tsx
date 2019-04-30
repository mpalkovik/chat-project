import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import Header from "../components/Header/Header";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Header", module).add("responsive desktop header", () => (
  <div className="w-full">
    <Header />
  </div>
));
storiesOf("Header", module).add("responsive mobile header", () => (
  <div className="w-1/2">
    <Header />
  </div>
));
