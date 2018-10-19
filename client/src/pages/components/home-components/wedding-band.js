import React from 'react';
import '../../styles/home-styles/wedding-band.css';

const WeddingHeader = () => {
    return ( 
        <div id="wedding-bands">
            <div class="text-center" id="wedding-band-image">
                <h4 class="image-header"> <strong> Wedding Bands </strong></h4>
                <p class="image-text"> Marry your bae the C.A. wae </p>
                <div class="force-to-bottom-center">
                    <a href="/wedding/mens-wedding-rings" class="wedding-btn text-dec-none"> FOR HIM </a>
                    <a href="/wedding/womens-wedding-rings" class="wedding-btn text-dec-none"> FOR HER </a>
                </div>
            </div>
        </div>
     );
}
 
export default WeddingHeader;