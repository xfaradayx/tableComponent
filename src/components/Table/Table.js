import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import classes from './style.module.scss';
import TablePagination from '../TablePagination/TablePagination';
import TableFilter from '../TableFilter/TableFilter';
import TableDetails from '../TableDetails/TableDetails';
import TableBody from '../TableBody/TableBody';
import withTableContext from './hoc/withTableContext';

function Table({
    headerItems, 
    body,
    hash,
    details,
    qty,
    currPage,
    setFilter,
    setSortByField,
    sortByField,
    setSelectedRow,
    selectedRow,
    setCurrPage
}) {    
    
    return (
        <div 
            className={classes.table__wrapper} 
        >
            <TableFilter setFilter={setFilter}/>
            <div className={classes.table__wrapper__inner}>
                <table className={classes.table}>
                    <TableHeader 
                        items={headerItems}
                        setSortByField={setSortByField}
                        sortByField={sortByField}
                    />
                    <TableBody 
                        body={body}
                        hash={hash}
                        setSelectedRow={setSelectedRow}
                        selectedRow={selectedRow}
                    />
                </table>
                {selectedRow && <TableDetails details={details} />}
            </div>
            <TablePagination 
                qty={qty}
                currPage={currPage}
                setCurrPage={setCurrPage}
            />
        </div>
    );
};


export default withTableContext(Table);