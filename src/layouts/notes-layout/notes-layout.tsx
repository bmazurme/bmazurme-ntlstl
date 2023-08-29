import { useEffect, useState } from 'react';

import MenuSecondary from '../../components/menu-secondary';
import Cards from './componets/cards';

import { TypeNoteCard } from '../note-layout';

import style from './notes-layout.module.css';

export default function NotesLayout({ links, cards }: {
  links: { name: string; to: string; }[];
  cards: TypeNoteCard[];
}) {
  return (
    <div className={style.notes}>
      <MenuSecondary links={links} />
      <Cards links={links} cards={cards} />
    </div>
  );
}
