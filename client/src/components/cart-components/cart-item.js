import React from 'react';
import { connect } from 'react-redux';
import { updateProductPage } from '../../actions/productPageActions';

import '../../styles/cart-styles/cart-item.css';

class CartItem extends React.Component {
    sendProductPageInfo = () => {
        let productInfo = {
            productId: this.props.productId,
            productUrl: this.props.productUrl,
            imgUrl: this.props.imgUrl,
            productName: this.props.name,
            price: this.props.price,
            description: this.props.description,
            categoryRoute: this.props.categoryRoute,
            categoryRouteName: this.props.categoryRouteName,
            subcategoryRouteName: this.props.subcategoryRouteName,
            subcategoryRoute: this.props.subcategoryRoute
        }
        this.props.updateProductPage(productInfo);
    }

    render() {
        const { productId, productUrl, imgUrl, name, description, quantity, price, ringSize, removeItem } = this.props;
        return ( 
            <div className="cart-item">
                <div className="cart-item-img">
                    <a href={ productUrl } className="cart-item-img" onClick={ this.sendProductPageInfo }><img src={ imgUrl }></img></a>
                    <div className="remove-item" onClick={ ()=>removeItem(productId, price) }><span>Remove</span></div>
                </div>
                <div className="cart-item-info-wrapper">
                    <div className="cart-item-info">
                        <p className="cart-item-name">{ name }</p>
                        <p>{ description }</p>
                        <p>Quantity: { quantity }</p>
                        <p>Ring Size: { ringSize }</p>
                    </div>
                    <div className="cart-item-price">
                        ${ price }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default connect(null, { updateProductPage })(CartItem);