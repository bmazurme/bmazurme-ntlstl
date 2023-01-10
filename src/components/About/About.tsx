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
          {info.about.map((text: string, index: number) =>
            <span key={`p_${index}`} className={styles.paragraph}>
              {text}
            </span>
          )}
        </p>
        <ContactMenu />
      </div>
    </section>
  )
}
