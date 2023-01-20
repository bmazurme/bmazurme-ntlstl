import Card from '../Card';

import { IProfile, Card as typeCard } from '../../interfaces';

import styles from './Portfolio.module.css';

export default function Portfolio({ info }: { info: IProfile }) {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio_title}>
        {info.portfolio}
      </h2>
      <ul className={styles.cards}>
        {info.portfolioList.map((card: typeCard, i) => <Card key={i} {...card} />)}
      </ul>
    </section>
  )
}
