import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/types';

const initialState = {
    items: [],
    numItems: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM_TO_CART: 
            return {
                ...state,
                numItems: state.numItems + 1,
                items: [...state.items, action.payload]
            }

        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                numItems: state.numItems - 1,
                items: [state.items.filter(item => item !== action.payload)]
            }
        default: return state;
    }
}