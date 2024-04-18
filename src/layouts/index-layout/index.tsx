import React, { useEffect, useState } from 'react';

import Content from '../content';
// import { Logo } from '../../components';
import { Menu } from '../../components/menu';

import withExtraClass from '../../hocs/with-extra-class';


// import { links } from '../../mock-data/links';

// import styles from '../../styles/home.module.css';
import menuStyle from './index-layout.module.css';
import styles from './company-section.module.css';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const IndexMenu = withExtraClass(menuStyle)(Menu);

// className={styles.main}
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
      <div>
        <h3 className={styles.name}>{item?.name}</h3>
              <h4 className={styles.position}>
                {item?.position}
                <span className={styles.date}>
                  {item?.from}
                  {' '}
                  -
                  {' '}
                  {item?.to}
                </span>
              </h4>

      </div>
    </Content>
  );
}
