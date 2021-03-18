import { createContext, useReducer, useContext } from 'react';
import { THEME_KEY } from '../utils/constants';

const DatalayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  if (!localStorage.getItem(THEME_KEY)) {
    localStorage.setItem(THEME_KEY, initialState.isDarkThemeEnabled);
  }
  return (
    <DatalayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DatalayerContext.Provider>
  );
};

const useData = () => useContext(DatalayerContext);

export default useData;
