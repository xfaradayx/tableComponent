import React, { useReducer } from 'react';
import DataStoreContext from './dataStoreContext';
import dataStoreReducer from './dataStoreReducer';

export default function DataStoreState({children}) {
    const initialState = {
        items: []
    }
    const [state, dispatch] = useReducer(dataStoreReducer, initialState);
    
    const setItems = items => {
         dispatch({type: 'SET_ITEMS', payload: items})
    }
    
    console.log(state);
    
    return (
        <DataStoreContext.Provider value={{
            state, setItems
        }}>
            {children}
        </DataStoreContext.Provider>
    )
}