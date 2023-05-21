
import { Card as typeCard, Link } from '../../interfaces';

import styles from './Card.module.css';

export default function Card({ label, title, tech, links }: typeCard) {
  return (
    <li className={styles.card}>
      <h4 className={styles.card__title}>{title}</h4>
      <h5 className={styles.card__type}>{label}</h5>

      <ul className={styles.card__tags}>
        {(tech).map((item: string, i) => 
          <li key={i} className={styles.card__tag}>{item}</li>
        )}
      </ul>

      <ul className={styles.card__links}>
        {links?.map((link: Link) => 
          <li key={link.label} className={styles.card__link}>
            <a href={link.url}>{link.label}</a>
          </li>
        )}
      </ul>
    </li>
  )
}
