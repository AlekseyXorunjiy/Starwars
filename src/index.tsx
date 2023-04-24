import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setUpStore } from "./store/store";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = setUpStore();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
