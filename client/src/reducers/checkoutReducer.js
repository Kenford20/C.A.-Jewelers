import { UPDATE_CHECKOUT_CONFIRMATION_INFO } from '../actions/types';

const initialState = {
    shippingInfo: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
        checkoutEmail: '',
        phone: ''
    },
    paymentInfo: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case UPDATE_CHECKOUT_CONFIRMATION_INFO: 
            console.log(action.payload)
            return {
                ...state,
                shippingInfo: action.payload.shippingInfo,
                paymentInfo: action.payload.paymentInfo
            } 
            
        default: return state;
    }
}