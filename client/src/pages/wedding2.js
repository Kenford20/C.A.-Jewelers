import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import landingPageBanner from '../components/landing-page-banner';
import CheapProducts from '../components/jewelry-components/cheap-products';

import '../styles/wedding-styles/wedding2.css';
import LandingPageBanner from '../components/landing-page-banner';

class Wedding2 extends React.Component {
    componentDidMount() {
        document.title = 'Anniversary and Wedding Bands | C.A. Jewelers';
    }
    render() {
        return ( 
            <div id="wedding-page">
                <GlobalHeader/>
                    <div id="wedding-header" className="landing-page-headers">
                        <img 
                            src={require("../images/wedding-header3.jpg")}
                            alt="grayscale image of two newly weds"
                            className="landing-page-header-img"
                        />
                        <div className="landing-page-header-text">
                            <h1>Wedding & Anniversary Bands</h1>
                            <p>Anim ut non velit aliquip duis cillum id irure occaecat nisi.</p>
                            <button id="wedding-header-btn">Shop Wedding Rings</button>
                        </div>
                    </div>

                    <div className="container">  
                        <LandingPageBanner
                            bannerID = "mens-wedding-banner"
                            route = "/wedding/mens-wedding-rings"
                            imgKey = 'wedding1'
                            imgID = "mens-wedding-image"
                            captionTitle = "MENS WEDDING BANDS"
                            captionText = "Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis."
                            captionLink = "Shop Mens' Bands"
                            reverse = { false }
                        />
                        <LandingPageBanner
                            bannerID = "womens-wedding-banner"
                            route = "/wedding/womens-wedding-rings"
                            imgKey = 'wedding2'
                            imgID = "womens-wedding-image"
                            captionTitle = "WOMENS WEDDING BANDS"
                            captionText = "Anim ut et non eu mollit labore fugiat labore. Qui elit esse excepteur voluptate qui mollit."
                            captionLink = "Shop Womens' Bands"
                            reverse = { true }
                        />
                    </div>
                    <CheapProducts/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Wedding2;