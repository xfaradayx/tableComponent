import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import classes from './style.module.scss';

export default function TablePagination({qty, currPage, setCurrPage}) {
    const qnt = [...Array(qty).keys()].map(num => num + 1);

    return (
        <div className={classes.tablePagination}>
            {
                qnt.map(page=> {
                    return (
                        <span 
                            key={uuid()}
                            className={clsx(classes.page, page === currPage && classes.selected)} 
                            onClick={e => setCurrPage(page)}
                        >
                            {page}
                        </span>)
                })
            }
        </div>    
    )
}