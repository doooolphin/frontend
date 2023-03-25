import GlobalStyle from '@components/Common/GlobalStyle';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from '@routes';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => worker.start());
}

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
