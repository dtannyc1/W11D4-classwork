const ADD_ITEM = "cart/add_item"

export default function cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD_ITEM: 
            const newState = {...state}
            newState[action.item.id] = {...action.item, count: 1} 
            return newState;
        default: 
            return state;
    }
}

export const addToStore = (item) => {
    return (
        {
            type: ADD_ITEM,
            item: item
        }
    )
}

window.addToStore = addToStore