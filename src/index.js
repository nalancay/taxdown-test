import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserContextProvider } from "./context/UserContext";
import { App } from "./App";
import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>,
  document.getElementById("root")
);
