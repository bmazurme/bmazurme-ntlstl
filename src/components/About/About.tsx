import getAge from '../../utils/getAge';

import { IProfile } from '../../interfaces';

import img from '../../../img/bm.jpg';
import styles from './About.module.css';

export default function About({ info }: { info: IProfile}) {
  return (
    <section className={styles.about}>
      <img className={styles.image} src={img.src} alt="фото профиля" />
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
      </div>
    </section>
  )
}
