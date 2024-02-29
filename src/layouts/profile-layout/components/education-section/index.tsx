import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './education-section.module.css';

export default function EducationSection({ profile }: any) {
  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{profile.education}</h2>
      <ul className={styles.list}>
        {profile.educationList.map((item: any) => (
          <li key={uuidv4()} className={styles.link}>
            <h3 className={styles.name}>{item.place}</h3>
            <h4 className={styles.position}>
              {item.name}
              <span className={styles.date}>
                {item.from}
                {' - '}
                {item.to}
              </span>
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
