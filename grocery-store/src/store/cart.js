const ADD_ITEM = "cart/add_item"
const REMOVE_ITEM = "cart/remove_item"
const INCREMENT_ITEM = "cart/increment_item"
const DECREMENT_ITEM = "cart/decrement_item"
const EMPTY_CART = "cart/empty_cart"

export default function cartReducer(state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case ADD_ITEM:
            newState[action.item.id] = {...action.item, count: 1}
            return newState;
        case REMOVE_ITEM:
            delete newState[action.item.id];
            return newState;
        case INCREMENT_ITEM:
            newState[action.item.id].count++
            return newState
        case DECREMENT_ITEM:
            newState[action.item.id].count--
            if (newState[action.item.id].count === 0) {
                delete newState[action.item.id]
            }
            return newState
        case EMPTY_CART:
            return {}
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

export const incrementItem = (item) => {
    return (
        {
            type: INCREMENT_ITEM,
            item: item
        }
    )
}

export const decrementItem = (item) => {
    return (
        {
            type: DECREMENT_ITEM,
            item: item
        }
    )
}

export const emptyCart = () => {
    return (
        {
            type: EMPTY_CART,
        }
    )
}
// window.addToStore = addToStore
