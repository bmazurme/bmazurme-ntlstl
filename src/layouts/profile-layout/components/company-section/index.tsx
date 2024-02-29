import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './company-section.module.css';

export default function CompanySection({ profile }: any) {
  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{profile.company}</h2>
      <ul className={styles.list}>
        {profile.companyList.map((item: any) => (
          <li key={uuidv4()} className={styles.link}>
            <h3 className={styles.name}>{item.name}</h3>
            <h4 className={styles.position}>
              {item.position}
              <span className={styles.date}>
                {item.from}
                {' '}
                -
                {' '}
                {item.to}
              </span>
            </h4>
            {item.description ? <p className={styles.description}>{item.description}</p> : null}
            {item.stack ? <p className={styles.description}>{item.stack}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
