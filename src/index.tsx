import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./style/index.css";
import "./style/fonts.css";
import "./style/reset.css";
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
