import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { LangWrapper, DataWrapper } from '../context';
import Metrika from '../components/metrika';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <LangWrapper>
      <DataWrapper>
        <Component {...pageProps} />
        <Metrika />
      </DataWrapper>
    </LangWrapper>
  );
}

export default appWithTranslation(App);
