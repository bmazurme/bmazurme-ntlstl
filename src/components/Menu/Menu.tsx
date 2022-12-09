import React from 'react';
import Link from 'next/link';
import links from './mockData';

import styles from './Menu.module.css';

export default function Menu() {
  return (
    <ul className={styles.menu}>
      {links.map(({ label, url}) => (
        <li key={label} className={styles.menu__item}>
          <Link className={styles.link} href={url}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
