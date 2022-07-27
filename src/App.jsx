import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import TestEmotion from './TestEmotion';

createRoot(document.querySelector('#app')).render(
  <React.StrictMode>
    <Main />
    <TestEmotion>안녕하세요</TestEmotion>
    <TestEmotion primary>안녕하세요 props입니다</TestEmotion>
  </React.StrictMode>
);
