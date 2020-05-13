import React, { useEffect, useContext, useState } from 'react';
import dataStoreContext from '../../context/dataStore/dataStoreContext';
import Table from '../../components/Table/Table';
import Spinner from '../../components/Spinner/Spinner';

export default function Main(props) {
    // const apiUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const apiUrl = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const { items, setItems, sortDesc, sortAsc } = useContext(dataStoreContext);
    const [sortByField, setSortByField] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();          
            setItems(data); 
            setIsLoading(false);
        })();
    }, []);

    useEffect(() => {
        if (sortByField.type === 'asc') {
            sortAsc(sortByField.field)
        } else if (sortByField.type === 'desc') {
            sortDesc(sortByField.field)
        }
    }, [sortByField]);

    const headerItems = Object.keys(items[0]).filter(key => key !== 'address' && key !== 'description');
    const bodyItems = items.map(item => ({...item, description: null, address: null}));

    return (
        <>

            <Table 
                headerItems={headerItems}
                bodyItems={bodyItems}
                setSortByField={setSortByField}
                sortByField={sortByField}
                rowsPerPage={50}
            />
        </>
    );
};