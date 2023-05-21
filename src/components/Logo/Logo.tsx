import React from 'react';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <h1 className={styles.title}>
      <span className={styles.title_background}>
        <span className={[styles.title_foreground, styles.animated].join(' ')}>
          [ntlstl]
        </span>
      </span>
    </h1>
  );
}
