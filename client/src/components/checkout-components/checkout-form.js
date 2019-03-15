import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

import '../../styles/checkout-styles/checkout-form.css';

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            country: '',
            zipCode: 12345,
            checkoutEmail: '',
            phone: '',
            cc: ''
        }
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        }, console.log(this.state))
    }

    render() { 
    return ( 
        <div id="checkout-form-wrapper">
            <form id="checkout-form">
                <div id="shipping-info-wrapper">
                    <h5><span style={{ color: 'var(--yellow)', fontSize: '32px' }}>1. </span>Shipping Information</h5>
                    <div className="two-col-inputs">
                        <label>First Name</label>
                        <input 
                            id="firstName" 
                            placeholder="First name"
                            onChange={ this.onChangeHandler }
                        ></input>
                    </div>
                    <div className="two-col-inputs">
                        <label>Last Name</label>
                        <input 
                            id="lastName" 
                            placeholder="Last name"
                            onChange={ this.onChangeHandler }
                        ></input>
                    </div>
                    <label>Shipping Address</label>
                    <input 
                        id="address" 
                        placeholder="Address Line 1"
                        onChange={ this.onChangeHandler }
                    ></input>
                    <input 
                        placeholder="Address Line 2 (Optional)"
                        onChange={ this.onChangeHandler }
                    ></input>
                    <label>City</label>
                    <input 
                        id="city" 
                        placeholder="City"
                        onChange={ this.onChangeHandler }
                    ></input>
                    <div className="two-col-inputs">
                        <label>State</label>
                        <input 
                            id="state" 
                            placeholder="State dropdown"
                            onChange={ this.onChangeHandler }
                        ></input>
                    </div>
                    <div className="two-col-inputs">
                        <label>Zip Code</label>
                        <input 
                            id="zipCode" 
                            placeholder="Zip Code"
                            onChange={ this.onChangeHandler }
                        ></input>
                    </div>
                    <label>Country</label>
                    <input 
                        id="country" 
                        placeholder="Country dropdown"
                        onChange={ this.onChangeHandler }
                    ></input>
                    <label>Email Address</label>
                    <input 
                        id="checkoutEmail" 
                        placeholder="Email"
                        onChange={ this.onChangeHandler }
                    ></input>
                    <label>Phone Number</label>
                    <input 
                        id="phone" 
                        placeholder="Phone"
                        onChange={ this.onChangeHandler }
                    ></input>
                </div>

                <div id="payment-info-wrapper">
                    <h5><span style={{ color: 'var(--yellow)', fontSize: '32px' }}>2. </span>Payment Information</h5>
                    <label>Credit Card Number</label>
                    <CardNumberElement className="credit-card-inputs"/>
                    <div className="two-col-inputs">
                        <label>Expiration Date</label>
                        <CardExpiryElement id="credit-card-exp-date" className="credit-card-inputs"/>
                    </div>
                    <div className="two-col-inputs">
                        <label>CVC Code</label>
                        <CardCVCElement id="credit-card-cvc" className="credit-card-inputs"/>
                    </div>
                    <br/>
                    <br/>
                    <a href="/checkout" id="checkout-btn">PROCEED TO CONFIRMATION</a>
                    <p style={{ textAlign: 'center', margin: '15px 0' }}>OR</p>
                    <span id="paypal-checkout">insert PAYPAL btn here</span>
                </div>
            </form>
        </div>
        );
    }
}
 
export default injectStripe(CheckoutForm);