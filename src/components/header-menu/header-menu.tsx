import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import links from '../../mock-data/links';

import styles from './header-menu.module.css';

export default function Menu() {
  return (
    <ul className={styles.menu}>
      {links.map(({ label, url}) => (
        <li key={uuidv4()} className={styles.menu__item}>
          <Link className={styles.link} href={url}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
