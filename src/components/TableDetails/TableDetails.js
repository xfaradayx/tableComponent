import React from 'react';
import classes from './style.module.scss';
import { v4 as uuid } from 'uuid';

export default function TableDetails({details}) {
    console.log(details);
    
    return (
        <div className={classes.table__details}>
            <h3>
                Детали:
            </h3>
            {
                Object.entries(details).map(([key, val]) => {
                    return (
                        <div key={uuid()} className={classes["table__details__item"]}>
                            <h4>{key}</h4>
                            <p>{val}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};