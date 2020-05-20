import React, { useState, useEffect, useRef } from 'react';
import { useSort } from '../../src/hooks/hooks';


const withTableContext = Component => ({headerItems, bodyItems, rowsPerPage, ...props}) =>  {
    const [currPage, setCurrPage] = useState(1);
    const [sortByField, setSortByField] = useState({});
    const [filter, setFilter] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const wrapperRef = useRef(null);
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

    let body = [...bodyItems].splice(rowsPerPage * (currPage - 1), rowsPerPage); 

    // 
    let details = null;

    if (selectedRow) {
        details = [...body].filter(item => `${item.id}:${item.phone}` === selectedRow)[0]
        // delete details.address;
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
            bodyItems={bodyItems}
            rowsPerPage={rowsPerPage}
            {...props}  
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

