import React from 'react';

const CartItem = ({ imgUrl, name, description, quantity, price }) => {
    return ( 
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={ imgUrl }></img>
                <div className="remove-item"><span>Remove</span></div>
            </div>
            <div className="cart-item-info">
                <p>{ name }</p>
                <p>{ description }</p>
                <p>Quantity: { quantity }</p>
            </div>
            <div className="cart-item-price">
                ${ price }
            </div>
        </div>
     );
}
 
export default CartItem;