import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear().toString();

  return (
    <footer className={styles.footer}>
      &copy; {year} [ntlstl]
    </footer>
  )
}
