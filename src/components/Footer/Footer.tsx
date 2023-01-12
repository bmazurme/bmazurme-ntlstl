import ContactMenu from '../ContactMenu';
import Link from 'next/link';

import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      <div>
        &copy; {year} <Link className={styles.link} href="/">[ntlstl]</Link>
      </div>
      <ContactMenu />
    </footer>
  )
}
