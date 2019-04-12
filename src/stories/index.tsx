import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../components/Example";
import "../main.css";
import Header from "src/components/Header/header";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Header", module).add("header", () => <Header />);
