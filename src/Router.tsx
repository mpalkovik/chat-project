import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Testing from "./components/Testing";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Counter path="counter" />
      <Testing path="testing" />
    </Router>
  );
};
