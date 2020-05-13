import React from 'react';
import classes from './style.module.scss';

export default function Spinner() {
    return (
        <div className={classes["lds-ring__wrapper"]}>
            <div className={classes["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}