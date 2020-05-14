import React from 'react';
import classes from './style.module.scss';

export default function TableFilter({setFilter}) {

    return (
        <div className={classes.filter__wrapper}>
            <input type="text" onChange={e => setFilter(e.target.value)}></input>
        </div>
    )
};