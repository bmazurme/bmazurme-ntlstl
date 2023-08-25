import { v4 as uuidv4 } from 'uuid';
import { useAppContext } from '../../../../context/app-context';

import styles from './company-section.module.css';

export default function CompanySection() {
  const context = useAppContext();
  const { info } = context as { info: TypeProfile };

  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{info.company}</h2>
      <ul className={styles.list}>
        {info.companyList.map((item) => (
          <li key={uuidv4()} className={styles.link}>
            <h4 className={styles.name}>{item.name}</h4>
            <h5 className={styles.position}>
              {item.position}
              <span className={styles.date}>
                {item.from}
                {' '}
                -
                {' '}
                {item.to}
              </span>
            </h5>
            {item.description ? <p className={styles.description}>{item.description}</p> : null}
            {item.stack ? <p className={styles.description}>{item.stack}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
