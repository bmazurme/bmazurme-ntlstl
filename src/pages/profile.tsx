import { useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Tech from '../components/Tech';
import Footer from '../components/Footer';
import Company from '../components/Company';

// import styles from './Profile.module.css';
import IProfile from './IProfile';

export default function Profile() {
  const profileInfo: Record<string, IProfile> = {
    EN: {
      name: 'Bogdan',
      profession: 'Frontend developer',
      portfolio: 'Portfolio',
      tech: 'Tech stack',
      use: 'I use technology in my work',
      company: 'Company',
      age: new Date(1985, 5, 22),
    },
    RU: {
      name: 'Богдан',
      profession: 'Фронтенд разработчик',
      portfolio: 'Портфолио',
      tech: 'Технологии',
      use: 'В работе использую следующие технологии',
      company: 'Компании',
      age: new Date(1985, 5, 22),
    },
  };
  const languageList = [
    { label: 'RU', active: true },
    { label: 'EN', active: false },
  ];
  const [language, setLanguage] = useState(languageList);
  const [info, setInfo] = useState(profileInfo.RU);

  const toggleLanguage = (label: string) => {
    setLanguage(language.map((item) =>
      ({ label: item.label, active: item.label === label })));
    setInfo(profileInfo[label]);
  };

  return (
    <div>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content="ntlstl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleLanguage={toggleLanguage} language={language} />

      <main>
        <About info={info} />
        <Portfolio info={info} />
        <Tech info={info} />
        <Company info={info} />
      </main>

      <Footer />
    </div>
  )
}
