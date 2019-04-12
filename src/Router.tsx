import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";
import Testing from "./components/Testing";
import Homepage from "./components/Homepage/HomepageContainer";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Example path="foo" />
      <Counter path="counter" />
      <Testing path="test" />
      <Homepage path="homepage" />
    </Router>
  );
};
