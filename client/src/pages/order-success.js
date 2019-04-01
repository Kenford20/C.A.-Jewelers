import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import { connect } from 'react-redux';
import CheckoutSummary from '../components/checkout-components/checkout-summary';

const OrderSuccess = ({ firstName }) => {
    return ( 
        <div id="order-success-page">
            <GlobalHeader/>
            <div className="container">
                <h2>Your order has been placed!</h2>
                <h3>Thank you { firstName }</h3>
                <p>Your order number is 123</p>
                <br/>
                <p>An email will be sent to you shortly containing the details about your purchase. If you have any concerns/questions regarding your order, please contact us at contact@cajewelers.com or at <a>123-456-7890</a></p>   
                <CheckoutSummary/>
            </div>
            <GlobalFooter/>
        </div>
     );
}
 
const mapStateToProps = state => ({
    cartItems: state.cart.items,
    numItems: state.cart.numItems,
    subTotal: state.cart.subTotal,
    customerInfo: state.checkout.shippingInfo,
    cardInfo: state.checkout.paymentInfo.token.card
});

export default connect(mapStateToProps)(OrderSuccess);