import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Logo, Menu } from '../components';

import short from '../../img/sh-screen.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content="ntlstl" />
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
      <main className={styles.main}>
        <Logo />
        <Menu />
      </main>
    </div>
  )
}
