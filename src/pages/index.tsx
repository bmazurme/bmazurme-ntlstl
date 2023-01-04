import Head from 'next/head';

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

      <main className={styles.main}>
        <Logo />
        <Menu />
      </main>

    </div>
  )
}
