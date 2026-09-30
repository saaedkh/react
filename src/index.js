import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from './stores/storeContext';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <script src="https://www.paypal.com/sdk/js?client-id=Ad9k6xA69q0GHouzoAwyzVnRKNmynTiDHsfV9_UFwndSUViKdZy-_V1IU0rzO0pLZXtAhago35pb49yu"></script>

    <App />
  </BrowserRouter>
);
