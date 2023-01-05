import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const languageList = [
    { label: 'RU', active: true },
    { label: 'EN', active: false },
  ];
  const [language, setLanguage] = useState(languageList);
  const toggleLanguage = (label: string) => {
    setLanguage(language.map((item) => {
      return { label: item.label, active: item.label === label };
    }));
  };
  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__link}>[ntlstl]</li>
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
