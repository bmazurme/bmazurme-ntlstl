/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Logo } from '../logo';
import { Menu } from './components';
import { useLangContext } from '../../context';

import { LANG_KEY, getFromStorage } from '../../utils';

import styles from './header.module.css';

export function Header() {
  const router: any = useRouter();
  const context = useLangContext();
  const { toggleLanguage } = context as unknown as
    { language: TypeLang[], toggleLanguage: (label: string) => void };

  useEffect(() => {
    const currentLang = getFromStorage(LANG_KEY);
    toggleLanguage(currentLang || 'RU');
    router.push({
      pathname: router.pathname,
      query: router.query,
    },
    null,
    { locale: currentLang === 'RU' ? 'ru' : 'en' });
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Menu />
    </div>
  );
}
