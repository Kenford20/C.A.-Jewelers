import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../actions/types';

const initialState = {
    items: [],
    numItems: 0,
    subTotal: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM_TO_CART: 
            console.log(action.payload)
            console.log(action.payload.price);
            return {
                ...state,
                numItems: state.numItems + 1,
                items: [...state.items, action.payload],
                subTotal: parseFloat(state.subTotal) + parseFloat(action.payload.price)
            } 

        case REMOVE_ITEM_FROM_CART:
            console.log(`remove item reducer`)
            return {
                ...state,
                numItems: state.numItems - 1,
                items: state.items.filter(item => {
                    if(item.productId !== action.payload.id)
                        return item;
                }),
                subTotal: parseFloat(state.subTotal) - parseFloat(action.payload.price)
            }
        default: return state;
    }
}