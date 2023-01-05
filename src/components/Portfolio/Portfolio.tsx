import { useState } from 'react';

import styles from './Portfolio.module.css';
import IProfile from '../../pages/IProfile';

export default function Portfolio({ info }: { info: IProfile }) {
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
    {
      label: 'Простой чат',
      url: '4',
    },
    {
      label: 'Игра пятнашки',
      url: '5',
    },
  ];

  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio_title}>{info.portfolio}</h2>
      <ul className={styles.project__list}>
        {portfolioList.map((item) => 
          <li key={item.url} className={styles.project__link}>
            <a className={styles.link} href={item.url}>{item.label}</a>
          </li>
        )}
      </ul>
    </section>
  )
}
