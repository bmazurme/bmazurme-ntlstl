import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import MenuSecondary from '../../components/menu-secondary';

import { noticeLinks } from '../../mock-data/links';

import style from './note-layout.module.css';

type TypeImage = {
  src: string;
  alt: string;
};

type TypeText = {
  text: string;
};

type TypeContent = TypeImage | TypeText;

export type TypeNoteCard = {
  id: string;
  name: string;
  link: string;
  tag: string;
  cover?: string;
  content?: TypeContent[];
};

export default function NoteLayout({ card }: { card: TypeNoteCard | null }) {
  return (
    <div className={style.note}>
      <MenuSecondary links={noticeLinks} />
      <h2 className={style.title}>{card?.name}</h2>
      <div className={style.content}>
        {card && card.content?.map((t: TypeContent) => {
          if ('alt' in t) {
            return (
              <Image
                key={uuidv4()}
                src={(t as TypeImage).src}
                alt={(t as TypeImage).alt}
                width={500}
                height={200}
              />
            );
          }
          return <p key={uuidv4()}>{(t as TypeText).text}</p>;
        })}
      </div>
    </div>
  );
}
