import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from '../../context/app-context';

import styles from './education-section.module.css';

export default function EducationSection() {
  const context = useAppContext();
  const { info } = context as { info: TypeProfile };

  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{info.education}</h2>
      <ul className={styles.company__list}>
        {info.educationList.map((item) => (
          <li key={uuidv4()} className={styles.company__link}>
            <h4 className={styles.name}>{item.place}</h4>
            <h5 className={styles.position}>
              {item.name}
              <span className={styles.date}>
                {item.from}
                {' - '}
                {item.to}
              </span>
            </h5>
          </li>
        ))}
      </ul>
    </section>
  );
}
