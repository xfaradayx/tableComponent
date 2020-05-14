import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useSort } from '../../hooks/hooks';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import TablePagination from '../TablePagination/TablePagination';
import TableFilter from '../TableFilter/TableFilter';


export default function Table({headerItems, bodyItems, rowsPerPage}) {    
    const [currPage, setCurrPage] = useState(1);
    const [sortByField, setSortByField] = useState({});
    const [filter, setFilter] = useState();
    
    const sort = useSort();
    
    window.bodyItems = bodyItems;
    if (filter) {
        bodyItems = bodyItems.filter( (item, ind) => {
            for (let key of Object.values(item)) {
                if (String(key).trim().includes(filter)) {
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

    const bodyRows = body.map( item => {
        return (            
            <tr key={uuid()} className={classes.table__row}  >
                {
                    Object.values(item).map(innerItem => {
                        return (
                            innerItem != null &&
                            <td key={uuid()} className={classes.table__cell}>
                                {innerItem}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })
    
    return (
        <div className={classes.table__wrapper}>
            <TableFilter setFilter={setFilter}/>
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
        </div>
    );
};