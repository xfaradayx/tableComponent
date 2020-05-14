import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import classes from './style.module.scss'

export default function TableHeader( {items, setSortByField, sortByField} ) {   
    const [lastTouched, setLastTouched] = useState(null);

    const header = items.map(item => {       
        return (
            <th key={uuid()} className={classes.cell} onClick={(e) => {
                if (e.target.nodeName !== 'SPAN') return;

                const clickTarget = e.target.innerHTML;
                                
                if (lastTouched === clickTarget) {
                    setSortByField( prev =>  ({field: clickTarget, type: prev.type === 'desc' ? 'asc' : 'desc'}))                    
                } else {    
                    setLastTouched(clickTarget);
                    setSortByField({field: clickTarget, type: 'asc'});
                } 
            }
            }><span>{item}</span>{sortByField.field === item && (sortByField.type === 'asc' && <div className={classes.sortArrow}>&uarr;</div>) || sortByField.field == item && (sortByField.type === 'desc' && <div className={classes.sortArrow}>&darr;</div>)}</th>
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