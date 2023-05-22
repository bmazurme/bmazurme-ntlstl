import React from 'react';
import classNames from 'classnames';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <h1 className={styles.title}>
      <span className={styles.title_background}>
        <span className={classNames(styles.title_foreground, styles.animated)}>
          [ntlstl]
        </span>
      </span>
    </h1>
  );
}
