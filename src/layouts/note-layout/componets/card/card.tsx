import style from './card.module.css';

export default function Card({ data }
  : { data: { name: string; tag: string }} ) {
  return (
    <div className={style.card}>
      <div className={style.cover}>{data.name}</div>
      <div className={style.footer}>
        <div>{data.tag}</div>
        <div>-</div>
      </div>
    </div>
  );
}
