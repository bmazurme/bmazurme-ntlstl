import Head from 'next/head';

import getAge from '../utils/getAge';

import styles from './Profile.module.css';

export default function Profile() {
  const dob = new Date(1985, 5, 22);
  const age = getAge(dob);
  const techList = ['HTML', 'CSS', 'JS', 'TS', 'React.js', 'Vue.js', 'Next.js', 'Express.js', 'Redux', 'RTK', 'Jest', 'Webpack', 'Parcel', 'PostCSS', 'Eslint', 'MUI', 'Tailwind', 'BEM', 'Canvas', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Figma'];

  return (
    <div className={styles.container}>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content="ntlstl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.about}>
          <img className={styles.image}></img>
          <h1 className={styles.name}>Bogdan</h1>
          <h3 className={styles.profession}>Фронтенд-разработчик, {age}</h3>
          <p className={styles.description}>
            <span className={styles.paragraph}>
              По образованию инженер-строитель. Когда работал в проектирование автоматизировал
              рабочие процессы с использованием скриптов на python и C#.  
            </span>
            <span className={styles.paragraph}>
              Прошел обучение по курсу веб-разработке и мидл фронтенд-разработчик в Яндекс.Практикум
            </span>
            <span className={styles.paragraph}>
              После того, как прошел курс по веб-разработке перешел 
              на работу где 100% времени занимаюсь фронтендом.
            </span>
          </p>
        </section>
        <section className={styles.tech}>
          <h2 className={styles.title}>Технологии</h2>
          <p className={styles.tech__description}>В работе использую следующие технологии</p>
          <ul className={styles.tech__list}>
            {techList.map((item) => <li key={item.replaceAll('.', '_')} className={styles.tag}>{item}</li>)}
          </ul>
        </section>
        <section className={styles.portfolio}>
          <h2 className={styles.title}>Проекты</h2>
          <ul>
            <li>Статичный сайт</li>
            <li>Адаптивный сайт</li>
            <li>Одностраничный сайт</li>
          </ul>
        </section>
        <section className={styles.portfolio}>
          <h2 className={styles.title}>Компании</h2>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </section>
      </main>
      <footer>
        2022
      </footer>
    </div>
  )
}
