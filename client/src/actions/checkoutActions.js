import { UPDATE_CHECKOUT_CONFIRMATION_INFO } from './types';

export const updateCheckoutInfo = (checkoutDetails) => dispatch => {
    console.log('updating checkout details');
    dispatch({ 
        type: UPDATE_CHECKOUT_CONFIRMATION_INFO,
        payload: checkoutDetails
    });
}