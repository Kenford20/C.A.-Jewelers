import React, { Component } from 'react';
import { connect } from 'react-redux';
import GlobalHeader from '../../../components/global-header';
import GlobalFooter from '../../../components/global-footer';
import ProductPageLayout from '../page-skeleton';
import SimilarNecklaces from '../similar-products/similar-necklaces';


class HaloMarquiseWhiteGold extends Component {
    render() { 
        return ( 
            <div className="halo-marquise-whitegold-page">
                <GlobalHeader/>
                <ProductPageLayout
                    imgUrl = "https://s3.amazonaws.com/media-cajewelers.com/BeadSet-resized.jpg"
                    categoryRoute="/engagement-rings"
                    categoryRouteName="ENGAGEMENT RINGS"
                    subcategoryRoute="/engagement-rings/halo-rings"
                    subcategoryRouteName="HALO ENGAGEMENT RINGS" 
                    productName="14K Gold Marquise Halo Engagement Ring"
                    price="1234"
                    description="In laoreet lacus metus, non facilisis elit semper sed. Donec ornare malesuada luctus. Nam ut quam facilisis, aliquam eros sed, tempus lacus. Sed pretium, ligula vitae aliquet tempus, nulla leo hendrerit augue, vitae sodales est tellus ac nunc. Nam consectetur quis augue sed vehicula. Nunc odio ipsum, commodo nec diam non, ullamcorper dictum ipsum. Quisque varius posuere magna, a luctus neque pharetra id. Mauris non erat et mi luctus dignissim."
                />
                <SimilarNecklaces/>
                <GlobalFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => {

}
 
export default connect(mapStateToProps)(HaloMarquiseWhiteGold);