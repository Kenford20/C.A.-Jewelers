import React from 'react';

import '../../styles/cart-styles/empty-cart.css';

const EmptyCart = () => {
    return ( 
        <div className="container" id="empty-cart">
            <h3>Your shopping bag is empty!</h3>
            <p>You may browse the selections below or use the navigation menu at the top of the page.</p>

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