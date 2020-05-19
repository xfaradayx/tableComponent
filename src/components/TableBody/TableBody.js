import React from 'react';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import classes from './style.module.scss';

export default function TableBody ({body, hash, setSelectedRow, selectedRow}) {    
    const bodyRows = body.map( item => {        
        return (            
            <tr 
                key={uuid()} 
                className={clsx(classes.table__row, selectedRow === `${item.id}:${item.phone}` && classes['table__row--selected'])} 
                onClick={e => setSelectedRow(`${item.id}:${item.phone}`)}
            >
                {
                    Object.entries(item).map( ([key, value]) => {
                        if (hash.includes(key)) {
                            return (
                                <td 
                                    key={uuid()} 
                                    className={classes.table__cell}
                                >
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
        <tbody className={classes.table__body}>
            {bodyRows}
        </tbody>
    )
}

