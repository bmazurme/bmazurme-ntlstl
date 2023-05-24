import { v4 as uuidv4 } from 'uuid';

import { contactLinks } from '../../mock-data';

import styles from './contact-menu.module.css';

export default function ContactMenu() {
  return (
    <ul className={styles.contact__links}>
      {contactLinks.map(({ label, link }) =>
        <li className={styles.contact__link} key={uuidv4()}>
          <a href={link}>{label}</a>
        </li>
      )}
    </ul>
  )
}
