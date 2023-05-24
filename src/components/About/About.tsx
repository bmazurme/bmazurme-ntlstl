import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from '../../context/app-context';

import getAge from '../../utils/getAge';
import { IProfile } from '../../interfaces';

import img from '../../../img/bm.jpg';
import styles from './About.module.css';

export default function About() {
  const context: unknown = useAppContext();
  const { info } = context as { info: IProfile };

  return (
    <section className={styles.about}>
      <img className={styles.image} src={img.src} alt="фото профиля" />
      <div className={styles.text}>
        <h1 className={styles.name}>{info.name}</h1>
        <h3 className={styles.profession}>{info.profession}, {getAge(info.age)}</h3>
        <p className={styles.description}>
          {info.about.map((text: string) =>
            <span key={uuidv4()} className={styles.paragraph}>{text}</span>
          )}
        </p>
      </div>
    </section>
  )
}
