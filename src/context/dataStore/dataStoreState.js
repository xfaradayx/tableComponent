import React, { useReducer } from 'react';
import DataStoreContext from './dataStoreContext';
import dataStoreReducer from './dataStoreReducer';

export default function DataStoreState({children}) {
    const initialState = {
        items: [{}]
    }
    const [{items}, dispatch] = useReducer(dataStoreReducer, initialState);
    
    const setItems = newItems => {
         dispatch({type: 'SET_ITEMS', newItems})
    }

    const sortBy = field => {
        dispatch({type: 'SORT_BY', field})
    }
    
    
    return (
        <DataStoreContext.Provider value={{
            items, setItems, sortBy
        }}>
            {children}
        </DataStoreContext.Provider>
    )
}