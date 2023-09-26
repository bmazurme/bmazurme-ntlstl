import React from 'react';
import Link from 'next/link';

import Menu from '../menu';
import { TITLE, Links } from '../../utils';

import withExtraClass from '../../hocs/with-extra-class';

import { contactLinks } from '../../mock-data';

import styles from './footer.module.css';
import menuStyle from './menu.module.css';

const ContactMenu = withExtraClass(menuStyle)(Menu);

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      <div>
        &copy;
        {` ${year} `}
        <Link className={styles.link} href={Links.BASE}>
          {`[${TITLE}]`}
        </Link>
      </div>
      <ContactMenu links={contactLinks} />
    </footer>
  );
}
