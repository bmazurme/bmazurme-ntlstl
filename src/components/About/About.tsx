import ContactMenu from '../ContactMenu';

import getAge from '../../utils/getAge';

import styles from './About.module.css';
import IProfile from '../../pages/IProfile';

export default function About({ info }: { info: IProfile}) {

  return (
    <section className={styles.about}>
      <img className={styles.image}></img>
      <h1 className={styles.name}>{info.name}</h1>
      <h3 className={styles.profession}>{info.profession}, {getAge(info.age)}</h3>
      <p className={styles.description}>
        <span className={styles.paragraph}>
          По образованию инженер-строитель. Когда работал в проектирование автоматизировал
          рабочие процессы с использованием скриптов на Python и C#. 
          Взаимодействие с Revit API, Forge API, Google API. 
        </span>
        <span className={styles.paragraph}>
          Прошел обучение по курсу веб-разработке и мидл фронтенд-разработчик в Яндекс.Практикум.
        </span>
        <span className={styles.paragraph}>
          После того, как прошел курс по веб-разработке перешел 
          на работу где 100% времени занимаюсь фронтендом.
        </span>
      </p>
      <ContactMenu />
    </section>
  )
}
