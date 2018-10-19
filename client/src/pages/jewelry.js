import React from 'react';
import GlobalHeader from './components/global-header';
import GlobalFooter from './components/global-footer';
import JewelryHeader from './components/jewelry-components/jewelry-header';
import Rings from './components/jewelry-components/rings';
import Bracelets from './components/jewelry-components/bracelets';
import Necklaces from './components/jewelry-components/necklaces';
import Earrings from './components/jewelry-components/earrings';
import CheapProducts from './components/jewelry-components/cheap-products';

import './styles/jewelry-styles/jewelry.css';

const Jewelry = () => {
    return ( 
        <div id="jewelry-page">
            <GlobalHeader/>
            <JewelryHeader/>
            <div class="container">  
                <div class="row">
                    <div class="col-md-5">
                        <Earrings/>
                    </div>
                    <div class="col-md-7">
                        <Rings/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-7">
                        <Necklaces/>
                    </div>
                    <div class="col-md-5">
                        <Bracelets/>
                    </div>
                </div>
            </div>
            <CheapProducts/>
            <GlobalFooter/>

        </div>

     );
}
 
export default Jewelry;