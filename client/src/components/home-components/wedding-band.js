import React from 'react';
import WeddingDescription from '../home-components/wedding-description';
import '../../styles/home-styles/wedding-band.css';

const WeddingHeader = () => {
    return ( 
        <div id="wedding-bands">
            <a href="/wedding">
                <div id="wedding-band-image"></div>
                {/* <h4 className="image-header"> <strong> Wedding Bands </strong></h4>
                <p className="image-text"> Marry your bae the C.A. wae </p> */}
            </a>
            <WeddingDescription/>
        </div>
     );
}
 
export default WeddingHeader;