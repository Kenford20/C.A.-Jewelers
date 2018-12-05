import React from 'react';
import '../../styles/jewelry-styles/bracelets.css';

const Bracelets = () => {
    return ( 
        <div id="bracelets">
            <a href="/jewelry/bracelets" id="shop-bracelets">
		        <div className="body-image text-center" id="bracelets-image"></div>
	        </a>
			<div className="text-center jewelry-containers">
				<h4 className="jewelry-caption-header"> C.A. BRACELETS </h4>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pharetra ipsum. Quisque mattis nulla et ullamcorper aliquet. Aenean fringilla.</p>
				<a href="/jewelry/bracelets"><h5 className="jewelry-caption-text"> Shop for Bracelets > </h5></a>
			</div>
        </div>
     );
}
 
export default Bracelets;