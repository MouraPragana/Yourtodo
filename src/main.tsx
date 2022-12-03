import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { YourTodoContextProvider } from "./contexts/yourTodoContext";
import GlobalStyles from "./styles/GlobalStyles";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={2} autoHideDuration={1000} hideIconVariant>
      <YourTodoContextProvider>
        <GlobalStyles />
        <App />
      </YourTodoContextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
