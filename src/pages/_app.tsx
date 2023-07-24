import { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from '@components/Common/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
