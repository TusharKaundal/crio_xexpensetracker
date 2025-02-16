import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";
import ContextProvider from "./contextApi/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
        autoHideDuration={3000}
      >
        <App />
      </SnackbarProvider>
    </ContextProvider>
  </React.StrictMode>
);
