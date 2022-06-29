import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
