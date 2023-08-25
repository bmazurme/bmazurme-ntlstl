import Card from '../card';

import style from './cards.module.css';

export default function Cards({ links, cards }
  : { links: { name: string; to: string; }[]; cards: string[]; }) {
  return (
    <div className={style.cards}>
      {cards.map((c, i) => <Card key={i} data={{ name: c, tag: links[i].name }} />)}
    </div>
  );
}
