import React from 'react';
import classes from './style.module.scss'

export default function TableHeader( {items, setSortByField, setLastTouched, lastTouched, sortByField} ) {   
    const header = items.map(item => {       
        return (
            <th className={classes.cell} onClick={(e) => {
                if (e.target.nodeName !== 'SPAN') return;

                const clickTarget = e.target.innerHTML;
                console.log(clickTarget);
                
                if (lastTouched === clickTarget) {
                    setSortByField({field: clickTarget, type: 'desc'})                    
                } else {    
                    setLastTouched(clickTarget);
                    setSortByField({field: clickTarget, type: 'asc'});
                }
                
            }
            }><span>{item}</span>{sortByField.field == item && (sortByField.type === 'asc' && <span>&uarr;</span>) || sortByField.field == item && (sortByField.type === 'desc' && <span>&darr;</span>)}</th>
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