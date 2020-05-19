import React from 'react';
import classes from './style.module.scss';
import { v4 as uuid } from 'uuid';

export default function TableDetails({details}) {
    const isObj = some => some instanceof Object && !(some instanceof Array)
    let res = [];
    const recLoop = inp => {
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
    }

    recLoop(details);
    
    return (
        <div className={classes.table__details}>
            <h3>
                Детали:
            </h3>
            {
                res
                // Object.entries(details).map(([key, val]) => {
                //     return (
                //         <div key={uuid()} className={classes["table__details__item"]}>
                //             <h4>{key}</h4>
                //             <p>{val}</p>
                //         </div>
                //     )
                // })
            }
        </div>
    );
};



// let tree = inp => {
//     window.res = [];
//     for (let key in inp) {
//         if (!isObj(inp[key])) {
//             console.log('primitive ' + inp[key])
//             res.push(inp[key])
//         } else {
//            return tree(inp[key])
//         }
//     }
// }