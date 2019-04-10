import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./main.css";
import Router from "./Router";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
