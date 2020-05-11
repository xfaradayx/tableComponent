

export default function dataStoreReducer(state, {type, newItems, field}) {
    switch (type) {
        case "SET_ITEMS": 
            return {
                ...state,
                items: newItems
            }
        case "SORT_BY": 
            return {
                ...state,
                items: [...state.items.sort( (a, b) => a[field] > b[field] ? '1' : '-1')]
            }
        default: 
            return {
                ...state
            }
    }
}