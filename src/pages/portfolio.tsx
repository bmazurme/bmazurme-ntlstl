import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Content from '../layouts/content';
import PortfolioLayer from '../layouts/portfolio-layout';

export default function ProfilePage() {
  const { t } = useTranslation();
  const portfolio: any = t('portfolio', { returnObjects: true });
  return (
    <Content>
      <PortfolioLayer portfolio={portfolio} />
    </Content>
  );
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;
  // const res = await fetch('http://localhost:3001/' + locale);
  // const data = await res.json();
  const data: any = [];

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      locale,
    },
  };
};
