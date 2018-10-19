import React from 'react';
import '../../styles/home-styles/diamonds-jewelry.css';

const DiamondsJewelry = () => {
    return ( 
        <div id="diamonds-jewelry">
            <a href="#" id="shop-diamonds">
		        <div class="body-image text-center" id="body-diamond">
					<div class="force-to-bottom-center">
			        <h4 class="jewelry-caption-header"> <strong> Shimmering and Flawless </strong></h4>
			        <h5 class="jewelry-caption-text"> Shop for Bracelets > </h5>
					</div>
		        </div>
	        </a>

	        <div id="bracelets-necklaces" class="text-center">
	            <a href="#" id="shop-bracelets">
		            <div class="body-image text-center" id="body-bracelets">
			        <h4 class="jewelry-caption-header"> <strong> Lovely </strong></h4>
		            <h5 class="jewelry-caption-text force-to-bottom-center"> Shop for Earrings > </h5>
		            </div>
	            </a>

	            <a href="#" id="shop-necklaces">
		            <div class="body-image text-center" id="body-necklaces">
			            <h4 class="jewelry-caption-header"> <strong> Fashionable </strong></h4>
			            <h5 class="jewelry-caption-text force-to-bottom-center"> Shop for Necklaces > </h5>
		            </div>
	            </a>
        	</div>
        </div>
     );
}
 
export default DiamondsJewelry;