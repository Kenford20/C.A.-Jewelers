import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../components/cart-components/cart-item';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';

import '../styles/order-confirmation.css';

class OrderConfirmation extends React.Component {
    handlePlaceOrder = async () => {
        try {
            let apiEndPoint = window.location.origin + '/api/charge';
            let tax = 0.1025;
            let amount = this.props.subTotal * tax;
            let orderDetails = this.props.checkoutInfo.shippingInfo;
            let token = this.props.checkoutInfo.stripeToken;

            await fetch(apiEndPoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ 
                    token, 
                    amount,
                    orderDetails
                })
            })
        } catch(err) {
            throw err;
        }
    } 

    sendConfirmationEmails = async() => {
        try {
            let apiEndPoint = window.location.origin + '/api/order-success';
            let tax = 0.1025;
            let amount = this.props.subTotal * tax;
            let orderDetails = this.props.checkoutInfo.shippingInfo;
            
            await fetch(apiEndPoint, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ 
                    amount,
                    orderDetails
                })
            })
        } catch(err) {
            throw err;
        }
    }

    componentDidMount() {
        console.log(this.props.customerInfo)
    }
    
    render() { 
        const { 
            firstName, 
            lastName, 
            address, 
            city, 
            state, 
            zipCode 
        } = this.props.customerInfo;

        const { 
            brand: cardBrand, 
            last4: cardLast4, 
            exp_month: cardExpMonth, 
            exp_year: cardExpYear 
        } = this.props.cardInfo;

        let subTotal = this.props.subTotal;
        let subTotalStr = subTotal.toString().length > 6 
                          ? subTotal.toString().slice(0, subTotal.toString().length - 6) + ',' + subTotal.toString().slice(subTotal.toString().length - 6) 
                          : subTotal;

        let salesTax = parseFloat((subTotal*0.1025)).toFixed(1);
        let total = parseFloat(parseFloat(subTotal) + parseFloat(salesTax)).toFixed(2);
        let totalStr = total.toString().length > 6 
                       ? total.toString().slice(0, total.toString().length - 6) + ',' + total.toString().slice(total.toString().length - 6) 
                       : total;

        const itemsInCart = this.props.cartItems.map(item => (
            <CartItem 
                key = { item.productId }
                productId = { item.productId }
                productUrl = { item.productUrl }
                imgUrl = { item.imgUrl }
                name = { item.name }
                description = { item.description }
                quantity = { item.quantity }
                price = { parseFloat(item.price).toFixed(2) }
                categoryRoute = { item.categoryRoute }
                categoryRouteName = { item.categoryRouteName } 
                subcategoryRoute = { item.subcategoryRoute }
                subcategoryRouteName = { item.subcategoryRouteName }
                removeItem = { this.removeItem }
                quantity = { item.quantity }
                ringSize = { item.ringSize }
            />
        ));

        return ( 
            <div id="order-confirmation-page">
                <GlobalHeader/>
                <div className="w-100 bg-lightgrey catalog-route-border">
                    <div className="container">    
                        <p className="catalog-route">
                            <a className="footer-links" href="/cart">SHOPPING CART</a><span className="route-separators">/</span>
                            <a className="footer-links" href="/checkout">SHIPPING AND PAYMENT</a><span className="route-separators">/</span>
                            <a className="footer-links" style={{ color: 'var(--yellow)' }}>REVIEW & PLACE ORDER</a>
                        </p>
                    </div>
                </div>

                <div id="order-confirmation-wrapper" className="container">
                    <h3 id="order-review-title">Review and Place Your Order</h3> 
                    
                    <div id="order-review-info-wrapper">
                        <div id="order-review-details">
                            {/* <h4 style={{ color: 'var(--yellow)' }}>Shipping to: { firstName + ' ' + lastName }</h4> */}
                            <div id="order-review-shipping">
                                <p><strong>Shipping Address <a href="/checkout" className="order-review-edit-btn">Change <i className="far fa-edit"></i></a></strong></p>
                                <div className="customer-info-box">
                                    <p>{ firstName + ' ' + lastName }</p>
                                    <p>{ address }</p>
                                    <p style={{ textTransform: 'uppercase' }}>{ `${city}, ${state} ${zipCode}` }</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div id="order-review-payment">
                                <p><strong>Payment Method<a href="/checkout" className="order-review-edit-btn">Change <i className="far fa-edit"></i></a></strong></p>
                                <div className="customer-info-box">
                                    <p>{ cardBrand } ending in { cardLast4 }</p>
                                    <p>Expires: { `${cardExpMonth}/${cardExpYear}` }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="order-review-cart-summary">
                        <hr/>
                        <h4>Cart Summary</h4>
                        { itemsInCart }
                    </div>

                    <div id="order-review-summary">
                        <h4 style={{ marginBottom: '20px' }}>Order Summary</h4>
                        <div className="summary-details"><span>Subtotal: </span> <span>${ subTotalStr }</span></div>
                        <div className="summary-details"><span>Shipping: </span> <span>Free</span></div>
                        <div className="summary-details"><span>Sales Tax: </span> <span>${ salesTax }0</span></div>
                        <hr/>
                        <strong><div className="summary-details"><span>Order Total: </span> <span>${ totalStr }</span></div></strong>
                        <br/>
                        <span id="place-order-btn">SUBMIT ORDER</span>
                    </div>
                </div>
                <GlobalFooter/>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    numItems: state.cart.numItems,
    subTotal: state.cart.subTotal,
    customerInfo: state.checkout.checkoutDetails,
    cardInfo: state.checkout.stripeToken.token.card
});
 
export default connect(mapStateToProps)(OrderConfirmation);