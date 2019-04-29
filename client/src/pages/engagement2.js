import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import LandingPageBanner from '../components/landing-page-banner';
import Popular from '../components/home-components/popular';

import '../styles/engagement-ring-styles/engagement-ring2.css';

class EngagementRings2 extends React.Component {
    componentDidMount() {
        document.title = 'Engagement Rings | C.A. Jewelers Diamond Rings';
    }
    render() {
        return ( 
            <div id="engagement-rings-page">
                <GlobalHeader/>
                <div id="engagement-rings-header" className="landing-page-headers">
                    <img 
                        src={require("../images/engagement-rings/engagement-banner.jpg")} 
                        alt="grayscale image of two newly weds"
                        className="landing-page-header-img"
                    />
                    <div className="landing-page-header-text">
                        <h1> Diamond Engagement Rings </h1>
                        <p>Adipisicing ad qui nisi aliqua adipisicing dolore non cupidatat cupidatat laboris labore do ullamco.</p>
                        <a href="/engagement/all-rings"><button id="engagement-header-btn">Shop Engagement Rings</button></a>
                    </div>
                </div>

                <div className="container">  
                    <LandingPageBanner
                        bannerID = "engagement-halo-banner"
                        route = "/engagement/halo-rings"
                        imgKey = 'engagement1'
                        imgID = "engagement-halo-image"
                        captionTitle = "Halo Engagement Rings"
                        captionText = "Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis."
                        captionLink = "Shop Halo Rings"
                        reverse = { false }
                    />
                    <LandingPageBanner
                        bannerID = "engagement-solitaire-banner"
                        route = "/engagement/solitaire-rings"
                        imgKey = 'engagement2'
                        imgID = "engagement-solitaire-image"
                        captionTitle = "Solitaire Engagement Rings"
                        captionText = "Anim ut et non eu mollit labore fugiat labore. Qui elit esse excepteur voluptate qui mollit."
                        captionLink = "Shop Solitaire Rings"
                        reverse = { true }
                    />
                    <LandingPageBanner
                        bannerID = "engagement-vintage-banner"
                        route = "/engagement/vintage-rings"
                        imgKey = 'engagement3'
                        imgID = "engagement-vintage-image"
                        captionTitle = "Vintage Engagement Rings"
                        captionText = "Excepteur commodo nisi aliquip laboris ipsum cillum dolor ea laboris cillum minim ut sit magna."
                        captionLink = "Shop Vintage Rings"
                        reverse = { false }
                    />
                    <LandingPageBanner
                        bannerID = "engagement-three-stone-banner"
                        route = "/engagement/three-stone-rings"
                        imgKey = 'engagement4'
                        imgID = "engagement-three-stone-image"
                        captionTitle = "Three Stone Engagement Rings"
                        captionText = "Eu irure pariatur non excepteur ipsum dolor do nostrud minim fugiat magna do. Non duis incididunt irure duis culpa."
                        captionLink = "Shop Three Stone Rings"
                        reverse = { true }
                    />
                </div>
                <Popular/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default EngagementRings2;