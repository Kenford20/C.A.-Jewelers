import React from 'react';
import { connect } from 'react-redux';

import '../../styles/checkout-styles/checkout-summary.css';

class CheckoutSummary extends React.Component {
    componentDidMount() {
        console.log(this.props.cartItems)
    }
    render() {
        const checkoutSummaryItems = this.props.cartItems.map(item => (
            <div className="checkout-summary-item" key={ item.productId }>
                <img src={ item.imgUrl }></img>
                <div className="checkout-summary-item-info">
                    <h6 className="checkout-summary-item-name">{ item.name }</h6>
                    <p>Quantity: { item.quantity }</p>
                    <p>Ring Size: { item.ringSize }</p>
                </div>
                <div className="checkout-summary-item-price">
                    <span>${ 
                        item.price.toString().length > 6
                        ? item.price.toString().slice(0, item.price.toString().length - 6) + ',' + item.price.toString().slice(item.price.toString().length - 6) 
                        : item.price
                    }</span>
                </div>
            </div>
        ));

        let subTotal = this.props.subTotal;
        let subTotalStr = subTotal.toString().length > 6 
                          ? subTotal.toString().slice(0, subTotal.toString().length - 6) + ',' + subTotal.toString().slice(subTotal.toString().length - 6) 
                          : subTotal;

        let salesTax = parseFloat((subTotal*0.1025)).toFixed(1);
        let total = parseFloat(parseFloat(subTotal) + parseFloat(salesTax)).toFixed(2);
        let totalStr = total.toString().length > 6 
                       ? total.toString().slice(0, total.toString().length - 6) + ',' + total.toString().slice(total.toString().length - 6) 
                       : total;

    return ( 
        <div id="checkout-summary">
            <h5 style={{ margin: '0' }}>Order Summary</h5>
            { checkoutSummaryItems }
            <br/>
            <div className="summary-details"><span>Subtotal</span> <span>${ subTotalStr }</span></div>
            <div className="summary-details"><span>FedEx Shipping</span> <span>Free</span></div>
            <div className="summary-details"><span>Sales Tax</span> <span>${ salesTax }0</span></div>
            <br/>
            <strong><div className="summary-details"><span>Total</span> <span>${ totalStr }</span></div></strong>
            <br/>
        </div>
        )
    };
}

const mapStateToProps = state => ({
    cartItems: state.cart.items,
    subTotal: state.cart.subTotal
});

 
export default connect(mapStateToProps)(CheckoutSummary);