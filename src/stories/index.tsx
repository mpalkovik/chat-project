import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../main.css";

storiesOf("Example", module).add("example", () => <Example />);
