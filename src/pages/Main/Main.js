import React, { useEffect, useContext, useState } from 'react';
import dataStoreContext from '../../context/dataStore/dataStoreContext';
import Table from '../../components/Table/Table';

export default function Main(props) {
    const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const { items, setItems, sortDesc, sortAsc } = useContext(dataStoreContext);
    const [sortByField, setSortByField] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();          
            setItems(data);  
        })();
    }, []);

    useEffect(() => {
        sortByField && sortAsc(sortByField);
    }, [sortByField]);

    const headerItems = Object.keys(items[0]).filter(key => key !== 'address' && key !== 'description');
    const bodyItems = items.map(item => ({...item, description: null, address: null}));

    return (
        <>
            <Table 
                headerItems={headerItems}
                bodyItems={bodyItems}
                setSortByField={setSortByField}
            />
        </>
    );
};