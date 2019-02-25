import React from 'react';

const EmptyCart = () => {
    return ( 
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
}
 
export default EmptyCart;