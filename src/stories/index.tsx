import React from "react";
import { storiesOf } from "@storybook/react";
import { Example } from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Buttons", module).add("Button primary", () => (
  <Button inverted={true} text="Button Primary" color={true} />
));
storiesOf("Buttons", module).add("Button secondary", () => (
  <Button inverted={false} text="Button Secondary" />
));
storiesOf("Buttons", module).add("Close", () => (
  <Button inverted={false} text="X" size={true} />
));
storiesOf("Input", module).add("normal", () => <Input />);
