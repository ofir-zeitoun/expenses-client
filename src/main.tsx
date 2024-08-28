import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Auth0ProviderWithNavigate } from "./components/utilities";
import App from "./App";
import "./index.css";
import i18n from "./components/utilities/translation/translation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
