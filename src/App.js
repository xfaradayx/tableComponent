import React, { useEffect } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import DataStoreState from './context/dataStore/dataStoreState';

function App() {
    return (
        <div className="App">
            <DataStoreState>
                <Main />
            </DataStoreState>
        </div>
    );
}

export default App;
