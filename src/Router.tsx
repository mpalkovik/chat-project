import { Router } from "@reach/router";
import React from "react";
import { Home } from "./components/Home";
import { Example } from "./components/Example";
import { CounterContainer } from "./components/Counter";
import { Testing } from "./components/Testing";
// tslint:disable-next-line:no-default-export
export default () => {
  return (
    <Router>
      <Home path="/" />
      <Example path="foo" />
      <CounterContainer path="counter" />
      <Testing path="testing" />
    </Router>
  );
};
