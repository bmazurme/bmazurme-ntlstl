import ContactMenu from '../ContactMenu';

import getAge from '../../utils/getAge';

import styles from './About.module.css';
import { IProfile } from '../../interfaces';

export default function About({ info }: { info: IProfile}) {

  return (
    <section className={styles.about}>
      <img className={styles.image} src="https://avatars.githubusercontent.com/u/49879328?s=400&v=4" />
      <div className={styles.text}>
        <h1 className={styles.name}>{info.name}</h1>
        <h3 className={styles.profession}>{info.profession}, {getAge(info.age)}</h3>
        <p className={styles.description}>
          <span className={styles.paragraph}>
            По образованию инженер-строитель. Когда работал в проектировании, 
            автоматизировал рабочие процессы с использованием скриптов на 
            Python и C# для заимодействия с Revit API, Forge API, Google API. 
          </span>
          <span className={styles.paragraph}>
            Прошел обучение по курсам «Веб-разработка» и «Мидл фронтенд-разработчик» в Яндекс.Практикум.
          </span>
          <span className={styles.paragraph}>
            После прохождения курса «Веб-разработка» перешел на работу, 
            где 100% времени занимаюсь фронтендом.
          </span>
        </p>
        <ContactMenu />
      </div>
    </section>
  )
}
