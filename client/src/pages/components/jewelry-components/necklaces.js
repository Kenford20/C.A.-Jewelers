import React from 'react'; 
import '../../styles/jewelry-styles/necklaces.css';  

const Necklaces = () => {
    return ( 
        <div id="necklaces">
            <a href="/jewelry/necklaces" id="shop-necklaces">
		        <div className="body-image text-center" id="necklaces-image"></div>
	        </a>
			<div className="text-center jewelry-containers">
				<h4 className="jewelry-caption-header"> C.A. NECKLACES </h4>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pharetra ipsum. Quisque mattis nulla et ullamcorper aliquet. Aenean fringilla. Aenean fringilla. Aenean fringilla.</p>
				<a href="/jewelry/necklaces"><h5 className="jewelry-caption-text"> Shop for Necklaces > </h5></a>
			</div>
		</div>
     );
}
 
export default Necklaces;