import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './types';

export const addToCart = (productDetails) => dispatch => {
    console.log('adding item')
    dispatch({ 
        type: ADD_ITEM_TO_CART,
        payload: productDetails
    })
}

export const removeFromCart = (productId) => dispatch => {
    console.log('removing item');
    dispatch({ 
        type: REMOVE_ITEM_FROM_CART,
        payload: productId 
    })
}