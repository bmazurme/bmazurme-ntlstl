import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { useAppContext } from '../../../../context/app-context';

import { LANG_KEY, saveToStorage } from '../../../../utils';

import styles from './menu.module.css';

export default function Menu() {
  const context = useAppContext();
  const { language, toggleLanguage } = context as unknown as
    { language: TypeLang[], toggleLanguage: (label: string) => void };
  const onToggleLang = (value: string) => {
    saveToStorage(LANG_KEY, value);
    toggleLanguage(value);
  };

  return (
    <ul className={styles.languages}>
      {language.map(({ label, active }) => (
        <li
          key={uuidv4()}
          className={classNames(styles.link, { [styles.link_active]: active })}
          onClick={() => onToggleLang(label)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
