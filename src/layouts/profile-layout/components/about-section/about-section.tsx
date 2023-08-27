/* eslint-disable max-len */
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from '../../../../context/app-context';

import { getAge } from '../../../../utils';

import img from '../../../../img/bm.jpg';
import styles from './about-section.module.css';

export default function AboutSection() {
  const context: unknown = useAppContext();
  const { info } = context as { info: TypeProfile };

  return (
    <section className={styles.about}>
      <Image
        className={styles.image}
        src={img.src}
        alt="фото профиля"
        width={500}
        height={500}
      />
      <div className={styles.text}>
        <h1 className={styles.name}>{info.name}</h1>
        <h3 className={styles.profession}>
          {info.profession}
          ,
          {' '}
          {getAge(info.age)}
        </h3>
        <p className={styles.description}>
          {info.about.map((text: string) => <span key={uuidv4()} className={styles.paragraph}>{text}</span>)}
        </p>
      </div>
    </section>
  );
}
