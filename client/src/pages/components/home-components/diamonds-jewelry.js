import React from 'react';
import '../../styles/home-styles/diamonds-jewelry.css';

const DiamondsJewelry = () => {
    return ( 
        <div id="diamonds-jewelry">
            <a href="#" id="shop-diamonds">
		        <div className="body-image text-center" id="body-diamond">
					<div className="force-to-bottom-center">
			        <h4 className="jewelry-caption-header"> <strong> Shimmering and Flawless </strong></h4>
			        <h5 className="jewelry-caption-text"> Shop for Bracelets > </h5>
					</div>
		        </div>
	        </a>

	        <div id="bracelets-necklaces" className="text-center">
	            <a href="#" id="shop-bracelets">
		            <div className="body-image text-center" id="body-bracelets">
			        <h4 className="jewelry-caption-header"> <strong> Lovely </strong></h4>
		            <h5 className="jewelry-caption-text force-to-bottom-center"> Shop for Earrings > </h5>
		            </div>
	            </a>

	            <a href="#" id="shop-necklaces">
		            <div className="body-image text-center" id="body-necklaces">
			            <h4 className="jewelry-caption-header"> <strong> Fashionable </strong></h4>
			            <h5 className="jewelry-caption-text force-to-bottom-center"> Shop for Necklaces > </h5>
		            </div>
	            </a>
        	</div>
        </div>
     );
}
 
export default DiamondsJewelry;