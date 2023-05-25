import Head from 'next/head';
import { NextSeo } from 'next-seo';
import HomeLayer from '../layers/index';

import { TITLE } from '../utils';

import short from '../img/screen.jpg';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="ntlstl"
        openGraph={{
          url: 'https://main--celebrated-pithivier-e91356.netlify.app',
          title: 'ntlstl',
          description: 'ntlstl',
          images: [
            {
              url: short.src,
              width: 320,
              height: 240,
              alt: 'preview',
              type: 'image/jpeg',
            },
          ],
          site_name: 'ntlstl',
        }}
      />
      <HomeLayer />
    </div>
  );
}
