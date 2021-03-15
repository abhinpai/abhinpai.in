import {createContext, useReducer, useContext} from 'react';

const DatalayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    <DatalayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DatalayerContext.Provider>
)

const useData = () => useContext(DatalayerContext);

export default useData;