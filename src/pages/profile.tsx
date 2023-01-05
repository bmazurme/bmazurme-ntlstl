import { useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Tech from '../components/Tech';
import Footer from '../components/Footer';
import Company from '../components/Company';

import IProfile from '../interfaces/IProfile';

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
      companyList: [
        'Apex, Fullstack-developer, 2019-2021',
        'StepLogic, Fullstack-developer, 2021-2022',
        'IFellow, Frontend-developer, 2022'
      ],
      portfolioList: [
        {
          label: 'Static page',
          url: 'https://bmazurme.github.io/how-to-learn/',
        },
        {
          label: 'Adaptive page',
          url: 'https://bmazurme.github.io/russian-travel/',
        },
        {
          label: 'Mesto CSR',
          url: 'https://whimsical-sprite-5d5e95.netlify.app/',
        },
        {
          label: 'Messager',
          url: 'https://deploy--brilliant-dasik-aed875.netlify.app/',
        },
        {
          label: 'Game 15-puzzle',
          url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
        },
      ],
    },
    RU: {
      name: 'Богдан',
      profession: 'Фронтенд разработчик',
      portfolio: 'Портфолио',
      tech: 'Технологии',
      use: 'В работе использую следующие технологии',
      company: 'Компании',
      age: new Date(1985, 5, 22),
      companyList: [
        'Apex, Fullstack-разработчик, с 2019 по 2021',
        'StepLogic, Fullstack-разработчик, с 2021 по 2022',
        'IFellow, Фронтенд-разработчик, с 2022',
      ],
      portfolioList: [
        {
          label: 'Статичный сайт',
          url: 'https://bmazurme.github.io/how-to-learn/',
        },
        {
          label: 'Адаптивный сайт',
          url: 'https://bmazurme.github.io/russian-travel/',
        },
        {
          label: 'Одностраничный сайт',
          url: 'https://whimsical-sprite-5d5e95.netlify.app/',
        },
        {
          label: 'Простой месседжер',
          url: 'https://deploy--brilliant-dasik-aed875.netlify.app/',
        },
        {
          label: 'Игра пятнашки',
          url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
        },
      ],
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
