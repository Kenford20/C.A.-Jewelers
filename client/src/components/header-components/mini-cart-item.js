import React from 'react';
import { connect } from 'react-redux';
import { updateProductPage } from '../../actions/productPageActions';

import '../../styles/header-styles/mini-cart-item.css';

class MiniCartItem extends React.Component {
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
        const { productUrl, imgUrl, productId, name, price, removeItem } = this.props;
        return ( 
            <div className="mini-cart-item">
                <div>
                    <a href={ productUrl }><img src={ imgUrl } className="mini-cart-item-img" onClick={ this.sendProductPageInfo }></img></a>
                    <div className="remove-item" onClick={ () => removeItem(productId, price) }><span>Remove</span></div>
                </div>
                <div>
                    <p className="mini-cart-item-name">{ name }</p>
                    <p className="mini-cart-item-price">${ 
                        price.toString().length > 6
                        ? price.toString().slice(0, price.toString().length - 6) + ',' + price.toString().slice(price.toString().length - 6) 
                        : price
                    }</p>
                </div>
            </div>
        );
    }
}
 
export default connect(null, { updateProductPage })(MiniCartItem);