/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  ReactNode, createContext, useContext, useState, useCallback,
} from 'react';

type TypeState = { info: TypeProfile | any };

const DataContext = createContext({ info: { profile: {}, portfolio: {} } });

export function DataWrapper({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TypeState>({ info: { profile: {}, portfolio: {} }});
  const toggle = (data: any) => setState(data);
  const toggleData = useCallback((data: any) => toggle(data), []);
  const sharedState = { toggleData, ...state };

  return (
    <DataContext.Provider value={sharedState}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
