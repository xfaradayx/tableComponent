import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import dataStoreContext from '../../context/dataStore/dataStoreContext';
import TablePagination from '../TablePagination/TablePagination';


export default function Table({headerItems, bodyItems, rowsPerPage, setSortByField, sortByField}) {
    const [currPage, setCurrPage] = useState(1);
    const pageQty = bodyItems.length / rowsPerPage;
    
    bodyItems = bodyItems.splice(rowsPerPage * (currPage - 1), rowsPerPage);
    
    const [lastTouched, setLastTouched] = useState(null);
    const bodyRows = bodyItems.map( item => {
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
                    setLastTouched={setLastTouched}
                    lastTouched={lastTouched}
                    sortByField={sortByField}
                />
                <tbody>
                        {bodyRows}
                </tbody>
            </table>
            <TablePagination 
                qty={pageQty}
                currPage={currPage}
                setCurrPage={setCurrPage}
            />
        </>
    );
};