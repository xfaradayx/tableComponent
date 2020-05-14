import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSort } from '../../hooks/hooks';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import TablePagination from '../TablePagination/TablePagination';

export default function Table({headerItems, bodyItems, rowsPerPage}) {    
    const [currPage, setCurrPage] = useState(1);
    const [sortByField, setSortByField] = useState({});
    const pages = Math.ceil(bodyItems.length/rowsPerPage);
    const sort = useSort();

    let body = [...bodyItems].splice(rowsPerPage * (currPage - 1), rowsPerPage);  

    if (sortByField.field) {
        sort(bodyItems, sortByField.field, sortByField.type)
    }

    const bodyRows = body.map( item => {
        return (            
            <tr key={uuid()} className={classes.tableRow}  >
                {
                    Object.values(item).map(innerItem => {
                        return (
                            innerItem != null &&
                            <td key={uuid()} className={classes.tableCell}>
                                {innerItem}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })
    
    return (
        <>
            <table className={classes.table}>
                <TableHeader 
                    items={headerItems}
                    setSortByField={setSortByField}
                    sortByField={sortByField}
                />
                <tbody>
                        {bodyRows}
                </tbody>
            </table>
            <TablePagination 
                qty={pages}
                currPage={currPage}
                setCurrPage={setCurrPage}
            />
        </>
    );
};