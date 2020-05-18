

export default function dataStoreReducer(state, {type, newItems, field}) {
    switch (type) {
        case "SET_ITEMS": 
            return {
                ...state,
                items: newItems
            }
        default: 
            return {
                ...state
            }
    }
}