/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import { getAge } from '../../../../utils';

import img from '../../../../img/bm.jpg';
import styles from './about-section.module.css';

export default function AboutSection({ profile }: any) {
  return (
    <section className={styles.about}>
      <Image
        loading='eager'
        className={styles.image}
        src={img.src}
        alt="фото профиля"
        width={500}
        height={500}
      />
      <div className={styles.text}>
        <h1 className={styles.name}>{profile.name}</h1>
        <h2 className={styles.profession}>
          {profile.profession}
          ,
          {' '}
          {getAge(new Date(profile?.age))}
        </h2>
        <p className={styles.description}>
          {profile.about?.map((text: string) =>
            <span key={uuidv4()} className={styles.paragraph}>
              {text}
            </span>)}
        </p>
      </div>
    </section>
  );
}
