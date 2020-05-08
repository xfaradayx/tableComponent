

export default function dataStoreReducer(state, action) {
    switch (action.type) {
        case "SET_ITEMS": 
            return {
                ...state,
                items: action.payload
            }
        default: 
            return {
                ...state
            }
    }
}