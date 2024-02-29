/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { Logo, Menu } from './components';
import { useLangContext } from '../../context';

import { LANG_KEY, getFromStorage } from '../../utils';

import styles from './header.module.css';

export function Header() {
  const context = useLangContext();
  const { toggleLanguage } = context as unknown as
    { language: TypeLang[], toggleLanguage: (label: string) => void };

  useEffect(() => {
    const currentLang = getFromStorage(LANG_KEY);
    toggleLanguage(currentLang || 'RU');
  }, []);

  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
    </div>
  );
}
