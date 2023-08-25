import { v4 as uuidv4 } from 'uuid';

import ProjectCard from '../../components/project-card';

import { useAppContext } from '../../context/app-context';

import styles from './portfolio-layout.module.css';

export default function Portfolio() {
  const context = useAppContext();
  const { info } = context as { info: TypeProfile };

  return (
    <main>
      <section className={styles.portfolio}>
        <h2 className={styles.title}>{info.portfolio}</h2>
        <ul className={styles.cards}>
          {info.portfolioList.map((card: TypeCard) => <ProjectCard key={uuidv4()} {...card} />)}
        </ul>
      </section>
    </main>
  );
}
