import { Router } from "@reach/router";
import React from "react";
import Home from "./components/Home";
import Counter from "./components/Counter";

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Counter path="counter" />
    </Router>
  );
};
