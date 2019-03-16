import { UPDATE_CHECKOUT_CONFIRMATION_INFO } from '../actions/types';

const initialState = {
    checkoutDetails: {},
    stripeToken: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CHECKOUT_CONFIRMATION_INFO: 
            console.log(action.payload)
            return {
                ...state,
                checkoutDetails: action.payload.shippingInfo,
                stripeToken: action.payload.stripeToken
            } 
            
        default: return state;
    }
}