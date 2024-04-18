import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import HomeLayer from '../layouts/index-layout/index';

import { TITLE } from '../utils';

import short from '../img/screen.jpg';
import styles from '../styles/home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const profile: any = t('profile', { returnObjects: true });
  // console.log(profile)

  return (
    // lassName={styles.container}
    <div>
      <Head>
        <title>ntlstl | web developer</title>
        <meta name="description" content={TITLE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="ntlstl"
        openGraph={{
          url: 'https://ntlstl.dev/',
          title: 'ntlstl',
          description: 'ntlstl',
          images: [
            {
              url: short.src,
              width: 320,
              height: 240,
              alt: 'preview',
              type: 'image/jpeg',
            },
          ],
          site_name: 'ntlstl',
        }}
      />
      <HomeLayer data={profile} />
    </div>
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

