import React from 'react';

const OrderSummary = ({ subtotal, salesTax }) => {
    return ( 
        <div id="order-summary">
            <div id="checkout">
                <h3>Order Summary</h3>
                <p>Subtotal <span>{ subtotal }</span></p>
                <p>FedEx Shipping <span> Free </span></p>
                <p>Sales Tax <span>{ salesTax }</span></p>
                <strong><p>Total <span>{ subtotal + salesTax }</span></p></strong>
                <span id="checkout-btn">CHECKOUT</span>
                <p>OR</p>
                <span id="paypal-checkout">insert PAYPAL btn here</span>
            </div>

            <div id="shipping-info">
                <h3>Shipping Info</h3>
                <p>Estimated delivery: <strong>some function that takes current date and adds X amount of days to it</strong></p>
                <p>Contact us at 123-456-7890 to schedule a weekend delivery, hold at a FedEx location, or discuss any other delivery options.</p>
            
                <h3>Other Options</h3>
                <p>Promo Code</p>
                <input id="promo-code-input" placeholder="Enter your code"></input>
                <p>Gift Options Available</p>

                <h3>Need Assistance?</h3>
                <p><a href="/contact">Chat now</a> or call 123-456-7890</p>
            </div>
        </div>
     );
}
 
export default OrderSummary;