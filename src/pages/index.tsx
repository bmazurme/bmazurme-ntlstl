import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Logo, Menu } from '../components';

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
        title="Bogdan"
        canonical="https://github.com/bmazurme"
        openGraph={{
          url: 'https://main--celebrated-pithivier-e91356.netlify.app/',
          title: 'Bogdan',
          description: 'ntlstl',
          images: [
            {
              url: 'https://main--celebrated-pithivier-e91356.netlify.app/_next/static/media/bm.a8f02518.jpg',
              width: 800,
              height: 600,
              alt: 'Profile image',
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
