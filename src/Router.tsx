import { Router } from "@reach/router";
import React from "react";
import Homepage from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";
import Testing from "./components/Testing";

export default () => {
  return (
    <Router>
      <Homepage path="/" />
      <Example path="foo" />
      <Counter path="counter" />
      <Testing path="test" />
    </Router>
  );
};
