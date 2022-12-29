import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import Reducers from "./reducers";
import App from "./App";
import "./index.css";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({ reducer: Reducers, middleware: [thunk] });
Kommunicate.init("13ac92d62fa70403336488603719b00bd");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
reportWebVitals();
