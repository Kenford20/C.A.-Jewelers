import React from 'react';

import '../../styles/cart-styles/order-summary.css';

const OrderSummary = ({ subtotal, salesTax }) => {
    return ( 
        <div id="order-summary">
            <div id="checkout">
                <h5>Order Summary</h5>
                <div className="summary-details"><span>Subtotal</span> <span>$1,000.00{ subtotal }</span></div>
                <div className="summary-details"><span>FedEx Shipping</span> <span>Free</span></div>
                <div className="summary-details"><span>Sales Tax</span> <span>${ 1000 * 0.1025 }0</span></div>
                <br/>
                <strong><div className="summary-details"><span>Total</span> <span>$1,102.50</span></div></strong>
                <br/>
                <span id="checkout-btn">CHECKOUT</span>
                <p style={{ textAlign: 'center', margin: '15px 0' }}>OR</p>
                <span id="paypal-checkout">insert PAYPAL btn here</span>
            </div>

            <div id="shipping-info">
                <h5>Shipping Info</h5>
                <p>Estimated delivery: <strong>some function that takes current date and adds X amount of days to it</strong></p>
                <p>Contact us at 123-456-7890 to schedule a weekend delivery, hold at a FedEx location, or discuss any other delivery options.</p>
            
                <h5>Other Options</h5>
                <p>Promo Code</p>
                <input id="promo-code-input" placeholder="Enter your code"></input>
                <p>Gift Options Available</p>

                <h5>Need Assistance?</h5>
                <p><a href="/contact">Chat now</a> or call 123-456-7890</p>
            </div>
        </div>
     );
}
 
export default OrderSummary;