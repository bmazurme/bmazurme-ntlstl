import React from 'react';
import Link from 'next/link';

import styles from './Menu.module.css';

export default function Menu() {
  const links = [
    {
      label: 'LinkedIn',
      url: '#',
    },
    {
      label: 'GitHub',
      url: '#',
    },
    {
      label: 'CV',
      url: '/profile',
    },
    {
      label: 'E-mail',
      url: '#',
    },
  ];

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
