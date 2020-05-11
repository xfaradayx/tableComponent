import React from 'react';
import classes from './style.module.scss'

export default function TableHeader( {items, setSortByField, setLastTouched, lastTouched} ) {
    const header = items.map(item => {
        return (
            <th className={classes.cell} onClick={(e) => {
                const clickTarget = e.target.innerHTML;
                if (lastTouched === clickTarget) {
                    setSortByField(null);
                    // setSortByFieldDesc()
                    
                }               
                setLastTouched(clickTarget);
                setSortByField(clickTarget);
            }
            }>{item}</th>
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