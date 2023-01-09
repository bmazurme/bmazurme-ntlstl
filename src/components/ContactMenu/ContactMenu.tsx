import styles from './ContactMenu.module.css';
import { contactLinks } from '../../mockData';

export default function ContactMenu() {
  return (
    <ul className={styles.contact__links}>
      {contactLinks.map(({ label, link }) =>
        <li className={styles.contact__link} key={label}>
          <a href={link}>
            {label}
          </a>
        </li>
      )}
    </ul>
  )
}
