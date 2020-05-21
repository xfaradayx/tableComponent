import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import classes from './style.module.scss'

export default function TableHeader( {items, setSortByField, sortByField} ) {   
    const [lastTouchedHeader, setLastTouchedHeader] = useState(null);
    const onSortHandler = (e, item) => {        
        const clickTarget = item;
        
        if (lastTouchedHeader === clickTarget) {
            setSortByField( prev =>  ({field: clickTarget, type: prev.type === 'desc' ? 'asc' : 'desc'}))                    
        } else {    
            setLastTouchedHeader(clickTarget);
            setSortByField({field: clickTarget, type: 'asc'});
        } 
    }

    const header = items.map(item => {    
        const hash = {
            "asc": <div className={classes.sortArrow}>&uarr;</div>,
            "desc": <div className={classes.sortArrow}>&darr;</div>
        }   
        
        return (
            <th 
                key={uuid()} 
                className={classes.cell} 
                onClick={(e) => onSortHandler(e, item)}
            >
                <span>
                    {item}
                </span>
                {
                    sortByField.field === item && hash[sortByField.type]
                }
            </th>
        )
    })
    
    return (
        <>
            <thead className={classes.header}>
                <tr>
                    {header}
                </tr>
            </thead>
        </>
    );
};