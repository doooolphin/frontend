import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import TestEmotion from './TestEmotion';

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <Main />
    <TestEmotion />
  </React.StrictMode>
);
