import { v4 as uuidv4 } from 'uuid';
import Card from '../card';

import style from './cards.module.css';

export default function Cards({ links, cards }
  : { links: string[]; cards: string[]; }) {
  return (
    <div className={style.cards}>
      {cards.map((c, i) => <Card key={i} data={{ name: c, tag: links[i] }} />)}
    </div>
  );
}
