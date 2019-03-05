import React from 'react';

import '../../styles/header-styles/mini-cart-item.css';

const MiniCartItem = ({ itemLink, imgUrl, productId, name, price, removeItem }) => {
    return ( 
        <div className="mini-cart-item">
            <div>
                <a href={ itemLink }><img src={ imgUrl } className="mini-cart-item-img"></img></a>
                <div className="remove-item" onClick={ () => removeItem(productId) }><span>Remove</span></div>
            </div>
            <div>
                <p className="mini-cart-item-name">{ name }</p>
                <p className="mini-cart-item-price">${ 
                    price.toString().length > 3
                    ? price.toString().slice(0, price.toString().length - 3) + ',' + price.toString().slice(price.toString().length - 3) 
                    : price
                }</p>
            </div>
                
        </div>
     );
}
 
export default MiniCartItem;