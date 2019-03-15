import React from 'react';
import { connect } from 'react-redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import CheckoutForm from '../components/checkout-components/checkout-form';
import CheckoutSummary from '../components/checkout-components/checkout-summary';

import '../styles/checkout.css';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        document.title = 'Secure Checkout | C.A. Jewelers Inc.'
    }

    render() { 
        return ( 
            <StripeProvider apiKey="pk_test_TG7ZwJDOhA4bqpPowkc7GGij">
                <Elements>
                <div id="checkout-page">
                    <GlobalHeader/>
                    <div className="w-100 bg-lightgrey catalog-route-border">
                        <div className="container">    
                            <p className="catalog-route">
                                <a className="footer-links" href="/cart">SHOPPING CART</a> <span className="route-separators">/</span>
                                <a className="footer-links" style={{ color: 'var(--yellow)' }}>SHIPPING AND PAYMENT</a>
                            </p>
                        </div>
                    </div>

                    <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Secure Checkout</h2>
                    <div id="form-summary-wrapper" className="container">
                        <CheckoutSummary/>
                        <CheckoutForm/>
                    </div>
                    <GlobalFooter/>
                </div>
                </Elements>
            </StripeProvider>
         );
    }
}

const mapStateToProps = state => ({
    subTotal: state.cart.subTotal
});
 
export default connect(mapStateToProps)(Checkout);