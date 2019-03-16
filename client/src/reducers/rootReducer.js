import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import checkoutReducer from './checkoutReducer';

export default combineReducers({
    cart: cartReducer,
    product: productReducer,
    checkout: checkoutReducer
});