import React from 'react';
import classes from './style.module.scss';

export default function TableFilter({setFilter}) {

    return (
        <div className={classes.filter__wrapper}>
            <span>Найти</span>{' '}
            <input type="text" onChange={e => setFilter(e.target.value)}></input>
        </div>
    )
};