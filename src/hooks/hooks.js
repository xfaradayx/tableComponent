// export default () => (data, field, direction) => {
//     return data.sort((a, b) => { 
//         if (direction === 'asc') {
//             return a[field] > b[field] ? '1' : '-1'
//         } else if (direction === 'desc') {
//             return a[field] > b[field] ? '-1' : '1'
//         }
//     })
// }

export const useSort = () =>  
    (data, field, direction) => {
        return data.sort((a, b) => { 
            if (direction === 'asc') {
                return a[field] > b[field] ? '1' : '-1'
            } else if (direction === 'desc') {
                return a[field] > b[field] ? '-1' : '1'
            }
        })
    }