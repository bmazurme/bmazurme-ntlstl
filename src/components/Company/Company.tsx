import styles from './Company.module.css';
import IProfile from '../../interfaces/IProfile';

export default function Company({ info }: { info: IProfile }) {
  const companyList = ['Apex, Fullstack-разработчик', 'StepLogic, Fullstack-разработчик', 'IFellow, Фронтенд-разработчик'];

  return (
    <section className={styles.company}>
      <h2 className={styles.title}>{info.company}</h2>
      <ul className={styles.company__list}>
        {companyList.map((item) => <li key={item} className={styles.company__link}>{item}</li>)}
      </ul>
    </section>
  )
}
