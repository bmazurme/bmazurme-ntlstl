import Card from '../card';

import { TypeNoteCard } from '../../../note-layout';

import style from './cards.module.css';

export default function Cards({ links, cards }: {
  links: { name: string; to: string; }[];
  cards:TypeNoteCard[];
}) {
  return (
    <div className={style.cards}>
      {cards.map((card, i) => <Card key={i} data={{ ...card }} />)}
    </div>
  );
}
