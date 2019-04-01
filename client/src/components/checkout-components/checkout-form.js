import React from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { connect } from 'react-redux';
import { updateCheckoutInfo } from '../../actions/checkoutActions';
import { Redirect } from 'react-router-dom';

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
            zipCode: '',
            checkoutEmail: '',
            phone: ''
        }
    }

    onChangeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        }, console.log(this.state))
    }

    checkBlankFormFields = (form) => {
        let ccNum = document.querySelector("#credit-card-num");
        let ccExpDate = document.querySelector("#credit-card-exp-date");
        let CVC = document.querySelector('#credit-card-cvc');
        
        if(ccNum.classList.contains('StripeElement--empty') || ccNum.classList.contains('StripeElement--invalid')
        || ccExpDate.classList.contains('StripeElement--empty') || ccExpDate.classList.contains('StripeElement--invalid')
        || CVC.classList.contains('StripeElements--empty') || CVC.classList.contains('StripeElement--invalid')) {
            return false;
        }

        for(let input in form) {
            if(form[input] === '')
                return false;
        }
        return true;
    }

    updateConfirmationPage = async (e) => {
        e.preventDefault();
        if(this.checkBlankFormFields(this.state)) {
            let token = await this.props.stripe.createToken({ name: this.state.firstName });
            let checkoutDetails = {
                shippingInfo: this.state,
                paymentInfo: token
            }
            this.props.updateCheckoutInfo(checkoutDetails);
            window.location="/order-confirmation";
        } else {
            alert('Please complete every field!');
        }
    }

    render() { 
    return ( 
        <div id="checkout-form-wrapper">
            <form id="checkout-form">
                <div id="shipping-info-wrapper">
                    <h5><span style={{ color: 'var(--yellow)', fontSize: '32px' }}>1. </span>Shipping Information</h5>
                    <div className="two-col-inputs" style={{ marginRight: '20px' }}>
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
                    <div className="two-col-inputs" style={{ marginRight: '20px' }}>
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
                    <CardNumberElement id="credit-card-num" className="credit-card-inputs"/>
                    <div className="two-col-inputs" style={{ marginRight: '20px' }}>
                        <label>Expiration Date</label>
                        <CardExpiryElement id="credit-card-exp-date" className="credit-card-inputs"/>
                    </div>
                    <div className="two-col-inputs">
                        <label>CVC Code</label>
                        <CardCVCElement id="credit-card-cvc" className="credit-card-inputs"/>
                    </div>
                    <br/>
                    <br/>
                    <span id="checkout-btn" onClick={ this.updateConfirmationPage }>REVIEW YOUR ORDER</span>
                    <p style={{ textAlign: 'center', margin: '15px 0' }}>OR</p>
                    <span id="paypal-checkout">insert PAYPAL btn here</span>
                </div>
            </form>
        </div>
        );
    }
}
 
export default connect(null, { updateCheckoutInfo })(injectStripe(CheckoutForm));