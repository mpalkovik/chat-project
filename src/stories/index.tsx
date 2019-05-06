import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import { Header } from "../components/Header/Header";

storiesOf("Example", module).add("example", () => <Example />);

storiesOf("Header", module).add("desktop version", () => <Header />);

storiesOf("Header", module).add("notebook version", () => <Header />);

storiesOf("Header", module).add("tablet version", () => <Header />);

storiesOf("Header", module).add("mobile version", () => <Header />);
