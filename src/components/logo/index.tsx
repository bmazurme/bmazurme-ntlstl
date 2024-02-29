import React from 'react';
import classNames from 'classnames';

import { TITLE } from '../../utils';

import styles from './logo.module.css';

export function Logo() {
  return (
    <h1 className={styles.title}>
      <span className={styles.title_background}>
        <span className={classNames(styles.title_foreground, styles.animated)}>
          {`[${TITLE}]`}
        </span>
      </span>
    </h1>
  );
}
