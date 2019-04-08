import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import { RouteComponentProps, Router } from "@reach/router";
import Foo from "./Foo";

const Home: FunctionComponent<RouteComponentProps> = () => <div>CHAT</div>;

function App() {
  return (
    <Router>
      <Home path="/" />
      <Foo path="foo" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
