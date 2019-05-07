import React from "react";
import { storiesOf } from "@storybook/react";
import { Example } from "../components/Example";
import Home from "../components/Home";
import "../style/index.css";
import "../style/fonts.css";

storiesOf("Home", module).add("home", () => <Home />);
