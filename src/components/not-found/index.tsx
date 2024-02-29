import React from 'react';
import classNames from 'classnames';

import styles from './not-found.module.css';

export function NotFound() {
  return (
    <h1 className={styles.title}>
      <span className={styles.title_background}>
        <span className={classNames(styles.title_foreground, styles.animated)}>
          {`[${404}]`}
        </span>
      </span>
    </h1>
  );
}
