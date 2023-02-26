import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { AlertProvider } from "./contexts/AlertContext";
import { AuthStorageProvider } from "./contexts/AuthStorageContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthStorageProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </AuthStorageProvider>
    </Router>
  </React.StrictMode>
);
