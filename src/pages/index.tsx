import Head from 'next/head'

import Logo from '../components/Logos'
import Menu from '../components/Menu';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <Menu />
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  )
}
