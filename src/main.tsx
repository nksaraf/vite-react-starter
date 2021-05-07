import { StrictMode } from "react";
import { setup } from "twind/shim";
import ReactDOM from "react-dom";
import App from "./App";
import twindConfig from "../twind.config";

setup(twindConfig);

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
