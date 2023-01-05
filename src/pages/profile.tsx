import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import getAge from '../utils/getAge';

import styles from './Profile.module.css';

export default function Profile() {
  const dob = new Date(1985, 5, 22);
  const age = getAge(dob);
  const techList = ['HTML', 'CSS', 'JS', 'TS', 'React.js', 'Vue.js', 'Next.js', 'Express.js', 'Redux', 'RTK', 'Jest', 'Webpack', 'Parcel', 'PostCSS', 'Eslint', 'MUI', 'Tailwind', 'BEM', 'Canvas', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Figma'];
  const portfolioList = [
    {
      label: 'Статичный сайт',
      url: '1',
    },
    {
      label: 'Адаптивный сайт',
      url: '2',
    },
    {
      label: 'Одностраничный сайт',
      url: '3',
    },
  ];
  const companyList = ['Apex', 'StepLogic, ', 'IFellow, Фронтенд-разработчик'];

  return (
    <div className={styles.container}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content="ntlstl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.about}>
          <img className={styles.image}></img>
          <h1 className={styles.name}>Bogdan</h1>
          <h3 className={styles.profession}>Фронтенд-разработчик, {age}</h3>
          <p className={styles.description}>
            <span className={styles.paragraph}>
              По образованию инженер-строитель. Когда работал в проектирование автоматизировал
              рабочие процессы с использованием скриптов на Python и C#.  
            </span>
            <span className={styles.paragraph}>
              Прошел обучение по курсу веб-разработке и мидл фронтенд-разработчик в Яндекс.Практикум.
            </span>
            <span className={styles.paragraph}>
              После того, как прошел курс по веб-разработке перешел 
              на работу где 100% времени занимаюсь фронтендом.
            </span>
          </p>

          <ul className={styles.contact__links}>
            <li className={styles.contact__link}><a href="#">LinkedIn</a></li>
            <li className={styles.contact__link}><a href="#">GitHub</a></li>
          </ul>
        </section>

        <section className={styles.portfolio}>
          <h2 className={styles.portfolio_title}>Портфолио</h2>
          <ul className={styles.project__list}>
            {portfolioList.map((item) => 
              <li key={item.url} className={styles.project__link}>
                <a className={styles.link} href={item.url}>{item.label}</a>
              </li>
            )}
          </ul>
        </section>

        <section className={styles.tech}>
          <h2 className={styles.title}>Технологии</h2>
          <p className={styles.tech__description}>
            В работе использую следующие технологии
          </p>
          <ul className={styles.tech__list}>
            {techList.map((item) => <li key={item.replaceAll('.', '_')} className={styles.tag}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.portfolio}>
          <h2 className={styles.title}>Компании</h2>
          <ul className={styles.company__list}>
            {companyList.map((item) => <li key={item} className={styles.company__link}>{item}</li>)}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}
