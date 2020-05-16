import React, { useContext, useState } from 'react';
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

    const hash = headerItems.join(':');
    const bodyRows = body.map( item => {
        return (            
            <tr key={uuid()} className={classes.table__row}  >
                {
                    Object.entries(item).map( ([key, value]) => {
                        if (hash.includes(key)) {
                            return (
                                <td key={uuid()} className={classes.table__cell}>
                                    {value}
                                </td>
                            )
                        }
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