import React from 'react';

import '../../styles/cart-styles/cart-item.css';

const CartItem = ({ productId, itemLink, imgUrl, name, description, quantity, price, ringSize, removeItem }) => {
    return ( 
        <div className="cart-item">
            <div className="cart-item-img">
                <a href={ itemLink } className="cart-item-img"><img src={ imgUrl }></img></a>
                <div className="remove-item" onClick={ ()=>removeItem(productId) }><span>Remove</span></div>
            </div>
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
     );
}
 
export default CartItem;