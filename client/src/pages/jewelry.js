import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import LandingPageBanner from '../components/landing-page-banner';
import CheapProducts from '../components/jewelry-components/cheap-products';

import '../styles/jewelry-styles/jewelry.css';

class Jewelry extends React.Component {
    componentDidMount() {
        document.title = 'Fine Jewelry | C.A. Jewelers';
    }
    render() {
        return ( 
            <div id="jewelry-page">
                <GlobalHeader/>
                <div id="jewelry-header" className="landing-page-headers">
                    <img 
                        src={require('../images/jewelry/jewelry-banner3.jpg')} 
                        alt="grayscale image of two newly weds"
                        className="landing-page-header-img"
                    />
                    <div className="landing-page-header-text">
                        <h1> Fine Jewelry Elegant and Dazzling Styles </h1>
                        <p>Tempor cupidatat dolor commodo quis Lorem deserunt dolor aute tempor amet deserunt in.</p>
                        <button id="engagement-header-btn">Shop Engagement Rings</button>
                    </div>
                </div>

                <div className="container">  
                    <LandingPageBanner
                        bannerID = "jewelry-earrings-banner"
                        route = "/jewelry/earrings"
                        imgKey = 'jewelry1'
                        imgID = "jewelry-earrings-image"
                        captionTitle = "C.A. Earrings"
                        captionText = "Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis."
                        captionLink = "Shop for Earrings"
                        reverse = { false }
                    />
                    <LandingPageBanner
                        bannerID = "jewelry-bracelets-banner"
                        route = "/jewelry/bracelets"
                        imgKey = 'jewelry2'
                        imgID = "jewelry-bracelets-image"
                        captionTitle = "C.A. Bracelets"
                        captionText = "Quis sit veniam anim eiusmod cupidatat id tempor consequat id."
                        captionLink = "Shop for Bracelets"
                        reverse = { true }
                    />
                    <LandingPageBanner
                        bannerID = "jewelry-necklaces-banner"
                        route = "/jewelry/necklaces"
                        imgKey = 'jewelry3'
                        imgID = "jewelry-necklaces-image"
                        captionTitle = "C.A. necklaces"
                        captionText = "Excepteur commodo nisi aliquip laboris ipsum cillum dolor ea laboris cillum minim ut sit magna."
                        captionLink = "Shop for necklaces"
                        reverse = { false }
                    />
                    <LandingPageBanner
                        bannerID = "jewelry-rings-banner"
                        route = "/jewelry/rings"
                        imgKey = 'jewelry4'
                        imgID = "jewelry-rings-image"
                        captionTitle = "C.A. Rings"
                        captionText = "Eu irure pariatur non excepteur ipsum dolor do nostrud minim fugiat magna do. Non duis incididunt irure duis culpa."
                        captionLink = "Shop for Rings"
                        reverse = { true }
                    />
                </div>
                <CheapProducts/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Jewelry;