import styles from './Portfolio.module.css';
import { IProfile } from '../../interfaces';

export default function Portfolio({ info }: { info: IProfile }) {
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
