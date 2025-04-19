import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";
import { BusinessProvider } from "./context/BusinessContext.jsx";
import { GlobalStoreProvider } from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <GlobalStoreProvider>
    <BusinessProvider>
      <Router>
        <App />
      </Router>
    </BusinessProvider>
    </GlobalStoreProvider>
  </React.StrictMode>
);
