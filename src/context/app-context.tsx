/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ReactNode, createContext, useContext, useState, useCallback,
} from 'react';

import { profileInfo, languageList } from '../mock-data';

type TypeState = { language: TypeLang[], info: TypeProfile };

const AppContext = createContext({ language: languageList, info: profileInfo.RU });

export function AppWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TypeState>({ language: languageList, info: profileInfo.RU });
  const toggle = (label: string) => {
    setState({
      language: state.language.map((item) => ({ label: item.label, active: item.label === label })),
      info: profileInfo[label],
    });
  };

  const toggleLanguage = useCallback((label: string) => toggle(label), []);
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
