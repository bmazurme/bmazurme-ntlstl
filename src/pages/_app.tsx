import React from 'react';
import { AppWrapper } from '../context/app-context';
import Metrika from '../components/metrika';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Metrika />
    </AppWrapper>
  );
}
