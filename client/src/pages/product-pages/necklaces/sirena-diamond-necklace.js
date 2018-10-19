import React, { Component } from 'react';

import GlobalHeader from '../../components/global-header';
import ProductPageLayout from '../../product-pages/page-skeleton';
import GlobalFooter from '../../components/global-footer';
import SimilarNecklaces from '../similar-products/similar-necklaces';


class SirenaDiamondNecklace extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="sirena-diamond-necklace-page">
                <GlobalHeader/>
                <ProductPageLayout
                    categoryRoute="/jewelry"
                    categoryRouteName="JEWELRY"
                    subcategoryRoute="/jewelry/necklaces"
                    subcategoryRouteName="NECKLACES" 
                    productName="Sirena Diamond Necklace 14ct Solid Titanium Gold"
                    price="1234"
                    description="In laoreet lacus metus, non facilisis elit semper sed. Donec ornare malesuada luctus. Nam ut quam facilisis, aliquam eros sed, tempus lacus. Sed pretium, ligula vitae aliquet tempus, nulla leo hendrerit augue, vitae sodales est tellus ac nunc. Nam consectetur quis augue sed vehicula. Nunc odio ipsum, commodo nec diam non, ullamcorper dictum ipsum. Quisque varius posuere magna, a luctus neque pharetra id. Mauris non erat et mi luctus dignissim."
                />
                <div class="product-details bg-light">
                    <br></br><br></br><h2 class="text-center">PRODUCT DETAILS</h2><br></br>
                    <div class="row container m-auto">
                        <div class="col-md-6 col-lg-3">
                            <h3>INFORMATION</h3>
                            <p>Metal: 14K Silver Gold</p>
                            <p>Width: 1 in.</p>
                            <p>Length: 0.5 in.</p>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <h3>CHAIN DETAILS</h3>
                            <p>Type: Cable Chain</p>
                            <p>Clasp: Spring Clasp</p>
                            <p>Chain Length: 17 in.</p>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <h3>GEMSTONE DETAILS</h3>
                            <p>Carat Weight: 0.05</p>
                            <p>Center Gemstone: Ruby</p>
                            <p>Gemstone Shape: Oval</p>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <h3>ADDITIONAL DETAILS</h3>
                            <p>Carat Weight: 0.05</p>
                            <p>Center Gemstone: Ruby</p>
                            <p>Gemstone Shape: Oval</p>
                        </div>
                    </div>
                </div>
                <SimilarNecklaces/>
                <GlobalFooter/>
            </div>
         );
    }
}
 
export default SirenaDiamondNecklace;