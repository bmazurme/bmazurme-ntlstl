import React, { useEffect, useState } from 'react';

import Content from '../content';

import style from './index-layout.module.css';
import styles from './company-section.module.css';
import Link from 'next/link';

export default function Home({ data }: any) {
  const list = data?.companyList;
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    if (list) {
      setItem(list[list.length - 1]);
    }
  }, [list]);

  return (
    <Content>
      <div className={style.main}>
        <h3 className={styles.name}>{item?.name}</h3>
        <h4 className={styles.position}>
          {item?.position}
          <span className={styles.date}>
            {`${item?.from} - ${item?.to}`}
          </span>
        </h4>

        <Link href="/profile">
          <h4 className={styles.position}>CV</h4>
        </Link>
        <Link href="/portfolio">
          <h4 className={styles.position}>Portfolio</h4>
        </Link>
      </div>
    </Content>
  );
}
