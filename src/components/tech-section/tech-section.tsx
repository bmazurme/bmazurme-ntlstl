import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from '../../context/app-context';

import techList from '../../mock-data/tech-list';

import styles from './tech-section.module.css';

export default function TechSection() {
  const context = useAppContext();
  const { info } = context as { info: TypeProfile };

  return (
    <section className={styles.tech}>
      <h2 className={styles.title}>{info.tech}</h2>
      <ul className={styles.tech__list}>
        {techList.map((item) => <li key={uuidv4()} className={styles.tag}>{item}</li>)}
      </ul>
    </section>
  );
}
