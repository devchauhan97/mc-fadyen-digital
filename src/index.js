import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StyledEngineProvider } from '@mui/material/styles';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <App />
  </StrictMode>,
  rootElement
);
