const ADD_ITEM = "cart/add_item"
const REMOVE_ITEM = "cart/remove_item"

export default function cartReducer(state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case ADD_ITEM:
            newState[action.item.id] = {...action.item, count: 1}
            return newState;
        case REMOVE_ITEM:
            // const newState = {...state}
            delete newState[action.item.id];
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

export const removeFromStore = (item) => {
    return (
        {
            type: REMOVE_ITEM,
            item: item
        }
    )
}

// window.addToStore = addToStore
