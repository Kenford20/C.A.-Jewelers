import { UPDATE_PRODUCT_PAGE } from './types';

export const updateProductPage = (productDetails) => dispatch => {
    console.log('adding item')
    dispatch({ 
        type: UPDATE_PRODUCT_PAGE,
        payload: productDetails
    })
}