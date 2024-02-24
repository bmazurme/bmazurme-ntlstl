import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import style from './menu.module.css';

export default function Menu({ links, extraClass }
  : { links: TypeLink[], extraClass?: Record<string, string> }) {
  return (
    <ul className={extraClass?.links}>
      {links.map(({ label, icon: Component, url }) => (
        <li className={extraClass?.item} key={uuidv4()}>
          <Link className={extraClass?.link} href={url}>
            {Component ? <span className={style.icon}>
              <Component size="xs" />
            </span> : null}
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
