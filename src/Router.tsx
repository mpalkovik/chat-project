import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Example path="foo" />
      <Counter path="counter" />
    </Router>
  );
};
