import { ReactElement} from 'react';

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
        <meta property="og:title" content="Bogdan" key="ogtitle" />
        <meta property="og:site_name" content="ntlstl" key="ogsitename" />
        <meta property="og:url" content="/profile"  key="ogurl" />
        <meta property="og:description" content="ntlstl" key="ogdesc" />
        <meta property="og:image" content="https://main--celebrated-pithivier-e91356.netlify.app/_next/static/media/sh-screen.371a3eee.png" key="ogimage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleLanguage={toggleLanguage} language={language} />
        {children }
      <Footer />
    </div>
  )
}
