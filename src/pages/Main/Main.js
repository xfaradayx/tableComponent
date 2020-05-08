import React, { useEffect, useContext } from 'react';
import dataStoreContext from '../../context/dataStore/dataStoreContext';


export default function Main(props) {
    const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const { items, setItems } = useContext(dataStoreContext);
    
    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();          
            setItems(data)
        })();
    }, [items]);


    return (
        <div>Main Page</div>
    );
};