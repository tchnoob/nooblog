import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import stores from "./store";
import { Provider } from "mobx-react";
ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
