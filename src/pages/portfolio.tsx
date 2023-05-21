import { useState } from 'react';

import Content from '../components/Content';
import Portfolio from '../components/Portfolio';

import { profileInfo, languageList } from '../mockData';
import { ILang, IProfile } from '../interfaces';

export default function Profile() {
  const [language, setLanguage] = useState<ILang[]>(languageList);
  const [info, setInfo] = useState<IProfile>(profileInfo.RU);

  const toggleLanguage = (label: string) => {
    setLanguage(language.map((item) =>
      ({ label: item.label, active: item.label === label })));
    setInfo(profileInfo[label]);
  };

  return (
    <Content toggleLanguage={toggleLanguage} language={language}>
      <main>
        <Portfolio info={info} />
      </main>
    </Content>
  )
}
