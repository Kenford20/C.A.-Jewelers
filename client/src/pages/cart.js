import React, { Component } from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EmptyCart from '../components/cart-components/empty-cart';
import CartItem from '../components/cart-components/cart-item';
import OrderSummary from '../components/cart-components/order-summary';
import { connect } from 'react-redux';

import '../styles/cart.css';

class Cart extends Component {
    render() { 
        let isCartEmpty = this.props.numItems === 0;
    
        const itemsInCart = this.props.cartItems.map((item, index) => (
            <CartItem 
                key = { index }
                imgUrl = { item.imgUrl }
                name = { item.name }
                description = { item.description }
                quantity = { item.quantity }
                price = { item.price }
            />
        ));

    return ( 
        <div id="cart">
            <GlobalHeader/>
            
            <div className="w-100 bg-lightgrey catalog-route-border">
                <p className="catalog-route container">
                    <a href="/" style={{ color:'#464646' }}>HOME</a> <span className="route-separators">/</span>
                    <span className="catalog-route-active"> SHOPPING BAG </span>
                </p>
            </div>
            <h3>Shopping Bag</h3>
            <div id="cart-items-summary" className="container">
                <div id="cart-items">
                    { 
                        isCartEmpty 
                        ? <EmptyCart/>
                        : itemsInCart 
                    }
                </div>
                <OrderSummary/>
            </div>

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