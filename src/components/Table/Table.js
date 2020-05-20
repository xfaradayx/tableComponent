import React, { useState, useEffect, useRef } from 'react';
import { useSort } from '../../hooks/hooks';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import TablePagination from '../TablePagination/TablePagination';
import TableFilter from '../TableFilter/TableFilter';
import TableDetails from '../TableDetails/TableDetails';
import TableBody from '../TableBody/TableBody';


export default function Table({headerItems, bodyItems, rowsPerPage}) {    
    const [currPage, setCurrPage] = useState(1);
    const [sortByField, setSortByField] = useState({});
    const [filter, setFilter] = useState();
    const [selectedRow, setSelectedRow] = useState();
    const wrapperRef = useRef(null);
    const sort = useSort();

    console.log(wrapperRef);
    
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

    // 

    const hash = headerItems.join(':');
    
    return (
        <div 
            className={classes.table__wrapper} 
            ref={wrapperRef}
        >
            <TableFilter setFilter={setFilter}/>
            <div className={classes.table__wrapper__inner}>
                <table className={classes.table}>
                    <TableHeader 
                        items={headerItems}
                        setSortByField={setSortByField}
                        sortByField={sortByField}
                    />
                    <TableBody 
                        body={body}
                        hash={hash}
                        setSelectedRow={setSelectedRow}
                        selectedRow={selectedRow}
                    />
                </table>
                {selectedRow && <TableDetails details={details} />}
            </div>
            <TablePagination 
                qty={pages}
                currPage={currPage}
                setCurrPage={setCurrPage}
            />
        </div>
    );
};