import styles from './Company.module.css';
import { IProfile } from '../../interfaces';

export default function Company({ info }: { info: IProfile }) {
  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{info.company}</h2>
      <ul className={styles.company__list}>
        {info.companyList.map((item) =>
          <li key={item.name} className={styles.company__link}>
            <h4 className={styles.name}>{item.name}</h4>
            <h5 className={styles.position}>
              {item.position}
              <span className={styles.date}>{item.from} - {item.to}</span>
            </h5>
            {item.description ?? <p className={styles.description}>{item.description}</p>}
            {item.stack ?? <p className={styles.description}>{item.stack}</p>}
          </li>
        )}
      </ul>
    </section>
  )
}
