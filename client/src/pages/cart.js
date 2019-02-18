import React, { Component } from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import { connect } from 'react-redux';

import '../styles/cart.css';

class Cart extends Component {
    // bring in state from the store here and render empty cart if the items array is empty, else map the array of items into divs with item info (picture, details, price etc)
    render() { 
        let isCartEmpty = this.props.numItems === 0;
        const emptyCart = (
            <div className="container" id="empty-cart">
                <h3>Your cart is empty!</h3>

                <h3 style={{ textAlign: 'center', margin: '50px 0' }}>Continue Shopping</h3>
                <div id="shopping-suggestions-wrapper" className="container">
                    <a href="/engagement-rings" className="shopping-suggestions"><h2>Shop Engagement Rings</h2></a>
                    <a href="/wedding-rings" className="shopping-suggestions"><h2>Shop Wedding Rings</h2></a>
                    <a href="/jewelry" className="shopping-suggestions"><h2>Shop Fine Jewelry</h2></a>
                    <a href="/engagement-rings/vintage-rings" className="shopping-suggestions"><h2>Shop Vintage Rings</h2></a>
                </div>
            </div>
        );

        const itemsInCart = this.props.cartItems.map(item => {
            <div className="cart-item">
                <div className="cart-item-img">
                    <img src={ item.imgUrl }></img>
                </div>
                <div className="cart-item-info">
                    <p>{ item.name }</p>
                    <p>{ item.description }</p>
                    <p>{ item.quantity }</p>
                </div>
                <div className="cart-item-price">
                    ${ item.price }
                </div>
            </div>
        });

    return ( 
        <div id="cart">
            <GlobalHeader/>
            <div className="w-100 bg-lightgrey catalog-route-border">
                <p className="catalog-route container">
                    <a href="/" style={{ color:'#464646' }}>HOME</a> <span className="route-separators">/</span>
                    <span className="catalog-route-active"> SHOPPING BAG </span>
                </p>
            </div>
            
            { isCartEmpty 
                ? emptyCart 
                : itemsInCart 
            }
            <GlobalFooter/>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    numItems: state.cart.numItems
});
 
export default connect(mapStateToProps)(Cart);