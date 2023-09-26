import React from 'react';
import Link from 'next/link';

import style from './card.module.css';

export default function Card({ data }
  : { data: { name: string; tag: string; link: string }}) {
  return (
    <Link className={style.card} href={`/note/${data.link}`}>
      <div className={style.cover}>
        <h4 className={style.title}>{`[${data.name}]`}</h4>
      </div>
      <div className={style.footer}>
        <span>{`#${data.tag}`}</span>
      </div>
    </Link>
  );
}
