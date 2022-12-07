import React from 'react';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu__item}>LinkedIn</li>
      <li className={styles.menu__item}>GitHub</li>
      <li className={styles.menu__item}>E-mail</li>
    </ul>
  );
}
