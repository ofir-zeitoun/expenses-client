import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0ProviderWithNavigate } from "./components/utilities";
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>,
);
