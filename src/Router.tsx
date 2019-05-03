import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Example from "./components/Example";
import Counter from "./components/Counter";
import Testing from "./components/Testing";
import Therapy from "./components/thumbnailTherapy/Therapy";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Example path="foo" />
      <Counter path="counter" />
      <Therapy path="therapy" />
      <Testing path="testing" />
    </Router>
  );
};
