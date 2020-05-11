import React, { useEffect } from 'react';
import classes from  './App.module.scss';
import Main from './pages/Main/Main';
import DataStoreState from './context/dataStore/dataStoreState';

function App() {
    return (
        <div className={classes.app}>
            <DataStoreState>
                <Main />
            </DataStoreState>
        </div>
    );
}

export default App;
