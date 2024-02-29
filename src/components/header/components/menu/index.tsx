/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { useLangContext } from '../../../../context/lang-context';

import { LANG_KEY, saveToStorage } from '../../../../utils';

import styles from './menu.module.css';

export function Menu() {
  const router: any = useRouter();
  const context = useLangContext();
  const { language, toggleLanguage } = context as unknown as
    { language: TypeLang[], toggleLanguage: (label: string) => void };

  const onToggleLang = (value: string) => {
    saveToStorage(LANG_KEY, value);
    toggleLanguage(value);

    router.push({
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: value === 'RU' ? 'ru' : 'en' });
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
