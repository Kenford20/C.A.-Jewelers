import React from 'react'; 
import '../../styles/jewelry-styles/necklaces.css';  

const Necklaces = () => {
    return ( 
        <div id="necklaces">
            <a href="/jewelry/necklaces" id="shop-necklaces">
		        <div class="body-image text-center" id="necklaces-image"></div>
	        </a>
			<div class="text-center jewelry-containers">
				<h4 class="jewelry-caption-header"> C.A. NECKLACES </h4>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut pharetra ipsum. Quisque mattis nulla et ullamcorper aliquet. Aenean fringilla.</p>
				<a href="/jewelry/necklaces"><h5 class="jewelry-caption-text"> Shop for Necklaces > </h5></a>
			</div>
		</div>
     );
}
 
export default Necklaces;