import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from './project-card.module.css';

export default function ProjectCard({
  img, label, title, tech, links,
}: TypeCard) {
  return (
    <li className={styles.card}>
      {img
      && (
      <Image
        className={styles.image}
        src={img}
        alt={title}
        width={300}
        height={200}
      />
      )}
      <h4 className={styles.title}>{title}</h4>
      <h5 className={styles.type}>{label}</h5>
      <ul className={styles.tags}>
        {(tech).map((item: string) => <li key={uuidv4()} className={styles.tag}>{item}</li>)}
      </ul>
      <ul className={styles.links}>
        {links?.map((link: TypeLink) => (
          <li key={uuidv4()} className={styles.link}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
}
