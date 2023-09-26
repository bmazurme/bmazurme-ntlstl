import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames';
import style from './menu-secondary.module.css';

export default function MenuSecondary({ links }
  : { links: { name: string; to: string; }[] }) {
  const router = useRouter();

  return (
    <ul className={style.menu}>
      {links.map((link) => (
        <li
          key={uuidv4()}
          className={classNames(
            style.item,
            { [style.active]: router.asPath === `/notes${link.to}` || (router.asPath === '/notes' && link.to === '/') },
          )}
        >
          <Link href={`/notes${link.to}`}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
