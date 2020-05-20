import React from 'react';
import classes from './style.module.scss';
import { v4 as uuid } from 'uuid';
import { recLoop } from './util';

export default function TableDetails({details}) {
    let res = recLoop(details);
    
    return (
        <div className={classes.table__details}>
            <h3>
                Детали:
            </h3>
            {
                res
            }
        </div>
    );
};
