import { ADD_PRODUCT_PAGE_INFO } from './types';

export const addProductPageInfo = (productDetails) => dispatch => {
    console.log('adding item')
    dispatch({ 
        type: ADD_PRODUCT_PAGE_INFO,
        payload: productDetails
    })
}