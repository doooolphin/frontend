import GlobalStyle from '@components/Common/GlobalStyle';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => worker.start());
}

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
);
