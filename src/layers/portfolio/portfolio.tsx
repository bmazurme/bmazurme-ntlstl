import { v4 as uuidv4 } from 'uuid';

import Card from '../../components/Card';

import { useAppContext } from '../../context/app-context';

import { IProfile, Card as typeCard } from '../../interfaces';

import styles from './Portfolio.module.css';

export default function Portfolio() {
  const context = useAppContext();
  const { info } = context as { info: IProfile };

  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio_title}>{info.portfolio}</h2>
      <ul className={styles.cards}>
        {info.portfolioList.map((card: typeCard) => <Card key={uuidv4()} {...card} />)}
      </ul>
    </section>
  )
}
