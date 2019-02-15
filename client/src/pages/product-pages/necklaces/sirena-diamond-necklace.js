import React, { Component } from 'react';

import GlobalHeader from '../../../components/global-header';
import GlobalFooter from '../../../components/global-footer';
import ProductPageLayout from '../page-skeleton';
import SimilarNecklaces from '../similar-products/similar-necklaces';


class SirenaDiamondNecklace extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sirena-diamond-necklace-page">
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
                <SimilarNecklaces/>
                <GlobalFooter/>
            </div>
         );
    }
}
 
export default SirenaDiamondNecklace;