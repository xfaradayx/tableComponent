import React, { useContext, useState } from 'react';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import dataStoreContext from '../../context/dataStore/dataStoreContext';

export default function Table({headerItems, bodyItems, setSortByField}) {
    const [lastTouched, setLastTouched] = useState(null);
    const bodyRows = bodyItems.map( (item, indx) => {
        return (
            <tr className={classes.tableRow}>
                {
                    Object.values(item).map(innerItem => {
                        return (
                            innerItem != null &&
                            <td className={classes.tableCell}>{innerItem}</td>
                        )
                    })
                }
            </tr>
        )
    })
    
    return (
        <table className={classes.table}>
            <TableHeader 
                items={headerItems}
                setSortByField={setSortByField}
                setLastTouched={setLastTouched}
                lastTouched={lastTouched}
            />
            <tbody>
                    {bodyRows}
            </tbody>
        </table>
    );
};