import {
  ReactNode, createContext, useContext, useState, useMemo, useCallback
} from 'react';

import { profileInfo, languageList } from '../mock-data';
import { ILang, IProfile } from '../interfaces';

type TypeState = { language: ILang[],info: IProfile };

// @ts-ignore
const AppContext = createContext();

export function AppWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TypeState>({ language: languageList, info: profileInfo.RU });
  const toggle = (label: string) => {
    setState({
      language: state.language.map((item) => ({ label: item.label, active: item.label === label })),
      info: profileInfo[label],
    });
  };

  const toggleLanguage = useCallback((label: string) => toggle(label), []); // (label: string) => toggle(label);
  const sharedState = { toggleLanguage, ...state };
  
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
