/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ReactNode, createContext, useContext, useState, useCallback,
} from 'react';

import { languageList } from '../mock-data';

type TypeState = { language: TypeLang[] };

const LangContext = createContext({ language: languageList });

export function LangWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TypeState>({ language: languageList });
  const toggle = (label: string) => {
    setState({
      language: state.language.map((item) => ({ label: item.label, active: item.label === label })),
    });
  };
  const toggleLanguage = useCallback((label: string) => toggle(label), []);
  const sharedState = { toggleLanguage, ...state };

  return (
    <LangContext.Provider value={sharedState}>
      {children}
    </LangContext.Provider>
  );
}

export function useLangContext() {
  return useContext(LangContext);
}
