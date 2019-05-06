import React from "react";
import { storiesOf } from "@storybook/react";
import { Example } from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import HoverandActiveStates from "../components/HoverandActiveStates";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Buttons", module).add("example", () => <HoverandActiveStates />);
