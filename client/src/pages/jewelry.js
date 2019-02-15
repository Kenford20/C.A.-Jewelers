import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import JewelryHeader from '../components/jewelry-components/jewelry-header';
import Rings from '../components/jewelry-components/rings';
import Bracelets from '../components/jewelry-components/bracelets';
import Necklaces from '../components/jewelry-components/necklaces';
import Earrings from '../components/jewelry-components/earrings';
import CheapProducts from '../components/jewelry-components/cheap-products';

import '../styles/jewelry-styles/jewelry.css';

const Jewelry = () => {
    return ( 
        <div id="jewelry-page">
            <GlobalHeader/>
            <JewelryHeader/>
            <div className="container">  
                <div className="row">
                    <div className="col-md-5">
                        <Earrings/>
                    </div>
                    <div className="col-md-7">
                        <Bracelets/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <Necklaces/>
                    </div>
                    <div className="col-md-5">
                        <Rings/>
                    </div>
                </div>
            </div>
            <CheapProducts/>
            <GlobalFooter/>

        </div>

     );
}
 
export default Jewelry;