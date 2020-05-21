import React, { useState, useEffect, useRef } from 'react';
import { useSort } from '../../../hooks/hooks';


const withTableContext = Component => ({headerItems, bodyItems, rowsPerPage}) =>  {
    const [currPage, setCurrPage] = useState(1);
    const [sortByField, setSortByField] = useState({});
    const [filter, setFilter] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const sort = useSort();

    if (filter) {
        bodyItems = bodyItems.filter( item => {
            for (let key of Object.values(item)) {
                if (String(key).toLowerCase().includes(filter.toLowerCase())) {
                    return item;
                }
            }
        })
    }    
    
    const pages = Math.ceil(bodyItems.length/rowsPerPage);

    if (sortByField.field) {
        sort(bodyItems, sortByField.field, sortByField.type)
    }

    const body = [...bodyItems].splice(rowsPerPage * (currPage - 1), rowsPerPage); 

    // 
    let details = null;

    if (selectedRow) {
        details = body.filter(item => `${item.id}:${item.phone}` === selectedRow)[0]
    }

    const checkOuterClick = e => {
        const node = e.target;        
        // if (!node.closest('td')) setSelectedRow(null);
    }   

    useEffect(() => {  
        document.addEventListener('click', checkOuterClick) 
        return () =>  document.removeEventListener('click', checkOuterClick)
    })

    const hash = headerItems.join(':');

    return (
        <Component 
            headerItems={headerItems}
            setFilter={setFilter}
            setSortByField={setSortByField}
            sortByField={sortByField}
            body={body}
            hash={hash}
            setSelectedRow={setSelectedRow}
            selectedRow={selectedRow}
            details={details}
            qty={pages}
            currPage={currPage}
            setCurrPage={setCurrPage}
        />
    )
}

export default withTableContext;

