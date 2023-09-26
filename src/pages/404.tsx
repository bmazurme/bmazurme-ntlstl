import React from 'react';
import NotFoundLayout from '../layouts/not-found-layout';

import styles from '../styles/home.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <NotFoundLayout />
    </div>
  );
}
