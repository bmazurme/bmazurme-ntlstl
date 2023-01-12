import { ReactElement} from 'react';
import { NextSeo } from 'next-seo';

import Head from 'next/head';
import { Header, Footer } from '..';
import ILang from '../../interfaces/ILang';
import styles from './Content.module.css';
import short from '../../../img/sh-screen.png';

interface IProps {
  toggleLanguage: (label: string) => void;
  language: ILang[];
  children: ReactElement;
}

export default function Content({ toggleLanguage, language, children }: IProps) {
  return (
    <div className={styles.page}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content="ntlstl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Bogdan"
        description="This is a demo description"
        canonical="https://www.example.com"
        openGraph={{
          url: '/',
          title: 'Bogdan',
          description: 'ntlstl',
          images: [
            {
              url: short.src,
              width: 800,
              height: 600,
              alt: 'Profile image',
              type: 'image/jpeg',
            },
          ],
          site_name: 'ntlstl',
        }}
/>
      <Header toggleLanguage={toggleLanguage} language={language} />
        {children }
      <Footer />
    </div>
  )
}
