import styles from './Portfolio.module.css';
import IProfile from '../../interfaces/IProfile';

export default function Portfolio({ info }: { info: IProfile }) {
  // const portfolioList = [
  //   {
  //     label: 'Статичный сайт',
  //     url: 'https://bmazurme.github.io/how-to-learn/',
  //   },
  //   {
  //     label: 'Адаптивный сайт',
  //     url: 'https://bmazurme.github.io/russian-travel/',
  //   },
  //   {
  //     label: 'Одностраничный сайт',
  //     url: 'https://whimsical-sprite-5d5e95.netlify.app/',
  //   },
  //   {
  //     label: 'Простой месседжер',
  //     url: 'https://deploy--brilliant-dasik-aed875.netlify.app/',
  //   },
  //   {
  //     label: 'Игра пятнашки',
  //     url: 'https://github.com/babylon-game/practicum_15puzzle_babylon',
  //   },
  // ];

  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio_title}>{info.portfolio}</h2>
      <ul className={styles.project__list}>
        {info.portfolioList.map((item) => 
          <li key={item.url} className={styles.project__link}>
            <a className={styles.link} href={item.url} target="_blank">{item.label}</a>
          </li>
        )}
      </ul>
    </section>
  )
}
