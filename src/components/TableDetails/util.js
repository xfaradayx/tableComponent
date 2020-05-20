import React from 'react';
import classes from './style.module.scss';
import { v4 as uuid } from 'uuid';

let res = [];
const isObj = some => some instanceof Object && !(some instanceof Array);

export const recLoop = inp => {
    for (let key in inp) {
        if (!isObj(inp[key])) {
            res.push(
                <div key={uuid()} className={classes["table__details__item"]}>
                    {key}: {inp[key]}
                </div>
            )
        } else {
            return recLoop(inp[key])
        }
    }
    let result = [...res];
    res = [];
    
    return result;
}


