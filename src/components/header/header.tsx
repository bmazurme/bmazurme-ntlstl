import { useEffect } from 'react';

import Logo from './components/logo';
import Menu from './components/menu';

import { useAppContext } from '../../context/app-context';

import { LANG_KEY, getFromStorage } from '../../utils';

import styles from './header.module.css';

export default function Header() {
  const context = useAppContext();
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
