import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";
import Testing from "./components/Testing";
import Header from "./components/Header/Header";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Example path="foo" />
      <Counter path="counter" />
      <Testing path="testing" />
      <Header path="header" />
    </Router>
  );
};
