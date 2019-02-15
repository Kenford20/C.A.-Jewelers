import React from 'react';
import '../../styles/jewelry-styles/earrings.css';

const Earrings = () => {
    return ( 
        <div id="earrings">
            <a href="/jewelry/earrings" id="shop-earrings">
		        <div className="body-image text-center" id="earrings-image"></div>
	        </a>
			<div className="text-center jewelry-containers">
				<h4 className="jewelry-caption-header"> C.A. EARRINGS </h4>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pharetra ipsum. Quisque mattis.</p>
				<a href="/jewelry/earrings"><h5 className="jewelry-caption-text"> Shop for Earrings </h5></a>
			</div>
		</div>
     );
}
 
export default Earrings;