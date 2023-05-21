import Link from 'next/link';

import { useAppContext } from '../../context/app-context';

import ILang from '../../interfaces/ILang';

import styles from './Header.module.css';

export default function Header() {
  const context = useAppContext();
  const { language, toggleLanguage } = context as { language: ILang[], toggleLanguage: (label: string) => void };
  
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__link}>
          <Link href='/'>[ntlstl]</Link>
        </li>
      </ul>
      <ul className={styles.language__list}>
        {language.map(({ label, active }) =>
          <li
            key={label}
            className={`${styles.language__link} ${active ? styles.language__link_active : ''}`}
            onClick={() => toggleLanguage(label)}
          >
            {label}
          </li>
        )}
      </ul>
    </div>
  )
}
