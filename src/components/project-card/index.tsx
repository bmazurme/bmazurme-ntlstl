import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { BiLink } from 'react-icons/bi';

import { imagesDict } from '../../mock-data/images-dict';
import { tagsDict } from '../../mock-data/tags-dict';

import styles from './project-card.module.css';

export function ProjectCard({
  img, label, title, tech, links,
}: TypeCard) {
  return (
    <li className={styles.card}>
      {img
      && (
      <Image
        className={styles.image}
        loading='eager'
        src={imagesDict[img]}
        alt={title}
        width={300}
        height={200}
      />
      )}
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.type}>{label}</h4>
      <ul className={styles.tags}>
        {(tech)
          .map((x) => tagsDict[x])
          .map(({ label, icon: Component }) =>
            <li
              key={uuidv4()}
              className={styles.tag}
            >
              {Component ? <span className={styles.icon}><Component size="20px" /></span> : null}
              {label}
            </li>)}
      </ul>

      <div className={styles.box}>
        <span className={styles.icon}>
          <BiLink />
        </span>
        <ul className={styles.links}>
          {links?.map((link: TypeLink) => (
            <li key={uuidv4()} className={styles.link}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
