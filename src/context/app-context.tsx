import { ReactNode, createContext, useContext, useState } from 'react';

import { profileInfo, languageList } from '../mock-data';
import { ILang, IProfile } from '../interfaces';

// @ts-ignore
const AppContext = createContext();

export function AppWrapper({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<ILang[]>(languageList);
  const [info, setInfo] = useState<IProfile>(profileInfo.RU);
  const toggleLanguage = (label: string) => {
    setLanguage(language.map((item) => ({ label: item.label, active: item.label === label })));
    setInfo(profileInfo[label]);
  };

  const sharedState = {
    toggleLanguage,
    language,
    info,
  };
  
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
