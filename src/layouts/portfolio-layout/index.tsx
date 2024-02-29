import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ProjectCard } from '../../components';

import styles from './portfolio-layout.module.css';

export default function Portfolio({ portfolio }: any) {
  return (
    <main>
      <section className={styles.portfolio}>
        <h2 className={styles.title}>{portfolio.title}</h2>
        <ul className={styles.cards}>
          {portfolio.list.map((card: TypeCard) => <ProjectCard key={uuidv4()} {...card} />)}
        </ul>
      </section>
    </main>
  );
}
