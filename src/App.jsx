import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import TestEmotion from './TestEmotion';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then(({ worker }) => worker.start());
}

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <Main />
    <TestEmotion />
  </React.StrictMode>
);
