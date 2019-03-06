import React, { Component } from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EmptyCart from '../components/cart-components/empty-cart';
import CartItem from '../components/cart-components/cart-item';
import OrderSummary from '../components/cart-components/order-summary';
import Spinner from '../components/spinner';
import { removeFromCart } from '../actions/cartActions';
import { connect } from 'react-redux';

import '../styles/cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        document.title = 'Shopping Cart | C.A. Jewelers';
    }

    removeItem = (itemId, itemPrice) => {
        this.setState({ loading: true });
        setTimeout(() => { this.setState({ loading: false })}, 1000);

        let removedItemInfo = {
            id: itemId,
            price: itemPrice
        }
        this.props.removeFromCart(removedItemInfo);
    }

    render() { 
        let isCartEmpty = this.props.numItems === 0;
    
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
            { 
                isCartEmpty && !this.state.loading 
                ? <EmptyCart/>
                : <div id="cart-items-summary" className="container">
                        <h2>Shopping Bag</h2>
                        <div id="cart-items">
                            { this.state.loading ? <Spinner/> : itemsInCart }
                        </div>
                        { !isCartEmpty && !this.state.loading && <OrderSummary subTotal={ this.props.subTotal }/> }
                  </div>
            }
            <GlobalFooter/>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    numItems: state.cart.numItems,
    subTotal: state.cart.subTotal
});
 
export default connect(mapStateToProps, { removeFromCart })(Cart);