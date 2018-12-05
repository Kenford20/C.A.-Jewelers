import React from 'react';
import '../../styles/jewelry-styles/rings.css';

const Rings = () => {
    return ( 
        <div id="rings">
            <a href="/jewelry/rings" id="shop-rings">
		        <div className="body-image text-center" id="rings-image"></div>
	        </a>
			<div className="text-center jewelry-containers">
				<h4 className="jewelry-caption-header"> C.A. RINGS </h4>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pharetra ipsum. Quisque mattis nulla et ullamcorper aliquet.</p>
				<a href="/jewelry/rings"><h5 className="jewelry-caption-text"> Shop for Rings > </h5></a>
			</div>
        </div>
     );
}
 
export default Rings;