import { ReactElement} from 'react';

import Head from 'next/head';
import { Header, Footer } from '..';
import ILang from '../../interfaces/ILang';
import styles from './Content.module.css';

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
      <Header toggleLanguage={toggleLanguage} language={language} />
        {children }
      <Footer />
    </div>
  )
}
