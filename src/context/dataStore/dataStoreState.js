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

    const sortAsc = field => {
        dispatch({type: 'SORT_ASC', field})
    }
    
    const sortDesc = field => {
        dispatch({type: 'SORT_DESC', field})
    }
    
    return (
        <DataStoreContext.Provider value={{
            items, setItems, sortAsc, sortDesc
        }}>
            {children}
        </DataStoreContext.Provider>
    )
}