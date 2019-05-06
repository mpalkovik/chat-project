import React from "react";
import { storiesOf } from "@storybook/react";
import { Example } from "../components/Example";
import "../style/index.css";
import "../style/fonts.css";
import Footer from "../components/footer";

storiesOf("Example", module).add("example", () => <Example />);
storiesOf("Footer", module).add("footer", () => <Footer />);
