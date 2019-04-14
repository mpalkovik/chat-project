import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../reset.css";
import "../fonts.css";

storiesOf("Example", module).add("example", () => <Example />);
