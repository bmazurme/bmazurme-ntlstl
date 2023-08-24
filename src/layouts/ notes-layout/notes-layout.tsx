import style from './notes-layout.module.css';

export default function NotesLayout() {
  const links = ['All', 'Code', 'Hobby', 'Places'];
  const cards = ['0', '1', '2', '3'];

  return (
    <div className={style.notes}>
      <ul className={style.menu}>
        {links.map((x) => <li key={x} className={style.item}>{x}</li>)}
      </ul>
      <div className={style.cards}>
        {cards.map((c) => <div key={c} className={style.card}>{c}</div>)}
      </div>
    </div>
  );
}
