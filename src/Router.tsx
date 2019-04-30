import { Router } from "@reach/router";
import React from "react";
import Homepage from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";

export default () => {
  return (
    <Router>
      <Homepage path="/" />
      <Example path="foo" />
      <Counter path="counter" />
    </Router>
  );
};
