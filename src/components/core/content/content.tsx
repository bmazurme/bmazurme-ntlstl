import { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { Header, Footer } from '../../index';

import { TITLE } from '../../../utils';

import styles from './content.module.css';
import short from '../../../img/bm.jpg';

interface IProps {
  children: ReactElement;
}

export default function Content({ children }: IProps) {
  return (
    <div className={styles.page}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/projects/red/ntlstl-main/public/favicon.ico" />
      </Head>
      <NextSeo
        title="Frontend developer"
        openGraph={{
          url: 'https://main--celebrated-pithivier-e91356.netlify.app/profile',
          title: 'Frontend developer',
          description: 'Frontend developer',
          images: [
            {
              url: short.src,
              width: 320,
              height: 240,
              alt: 'profile image',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Bogdan',
        }}
      />
      <Header />
      {children }
      <Footer />
    </div>
  );
}
