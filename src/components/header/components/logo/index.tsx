import React from 'react';
import Link from 'next/link';

import { TITLE, Links } from '../../../../utils';

import styles from './logo.module.css';

export function Logo() {
  return (
    <ul className={styles.list}>
      <li className={styles.link}>
        <Link href={Links.BASE}>{`[${TITLE}]`}</Link>
      </li>
    </ul>
  );
}
