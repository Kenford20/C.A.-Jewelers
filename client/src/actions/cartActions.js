import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './types';

export const addToCart = () => dispatch => {
    dispatch({ 
        type: ADD_ITEM_TO_CART,
        payload: stuffaboutitemaddedtocart
    })
}

export const RemoveFromCart = () => dispatch => {
    dispatch({ 
        type: REMOVE_ITEM_FROM_CART,
        payload: stuffaboutitemremovedtocart 
    })
}