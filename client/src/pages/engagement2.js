import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EngagementHeader from '../components/engagement-ring-components/engagement-header';
import EngagementBody from '../components/engagement-ring-components/engagement-body';
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
                <div id="wedding-header">
                    <img src={require("../images/engagement-rings/engagement-banner.jpg")} alt="grayscale image of two newly weds"></img>
                    <div id="engagement2-header-text">
                        <h1> Diamond Engagement Rings </h1>
                        <p>Adipisicing ad qui nisi aliqua adipisicing dolore non cupidatat cupidatat laboris labore do ullamco.</p>
                        <button id="engagement-header-btn">Shop Engagement Rings</button>
                    </div>
                </div>

                <div className="container">  
                    <div id="earrings" className="engagement-sub-containers">
                        <a href="/engagement/earrings" className="engagement-images">
                            <img src={require('../images/engagement-rings/halo-banner.jpg')} id="earrings-image"></img>
                        </a>
                        <div className="engagement-containers">
                            <h4 className="engagement-caption-header"> Halo Engagement Rings </h4>
                            <p> Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis.</p>
                            <a href="/engagement/earrings"><h5 className="engagement-caption-text"> Shop Halo Rings </h5></a>
                        </div>
                    </div>

                    <div id="bracelets" className="engagement-sub-containers">
                        <div className="engagement-containers">
                            <h4 className="engagement-caption-header"> Solitaire Engagement Rings </h4>
                            <p>Anim ut et non eu mollit labore fugiat labore. Qui elit esse excepteur voluptate qui mollit.</p>
                            <a href="/engagement/bracelets"><h5 className="engagement-caption-text"> Shop Solitaire Rings </h5></a>
                        </div>
                        <a href="/engagement/bracelets" className="engagement-images">
                            <img src={require('../images/engagement-rings/solitaire-banner.jpg')} id="bracelets-image"></img>
                        </a>
                    </div>

                    <div id="necklaces" className="engagement-sub-containers">
                        <a href="/engagement/necklaces" className="engagement-images">
                            <img src={require('../images/engagement-rings/vintage-banner.jpg')} id="necklaces-image"></img>
                        </a>
                        <div className="engagement-containers">
                            <h4 className="engagement-caption-header"> Vintage Engagement Rings </h4>
                            <p> Excepteur commodo nisi aliquip laboris ipsum cillum dolor ea laboris cillum minim ut sit magna. </p>
                            <a href="/engagement/necklaces"><h5 className="engagement-caption-text"> Shop Vintage Rings </h5></a>
                        </div>
                    </div>

                    <div id="rings" className="engagement-sub-containers">
                        <div className="engagement-containers">
                            <h4 className="engagement-caption-header"> Three Stone Engagement Rings </h4>
                            <p> Eu irure pariatur non excepteur ipsum dolor do nostrud minim fugiat magna do. Non duis incididunt irure duis culpa.</p>
                            <a href="/engagement/rings"><h5 className="engagement-caption-text"> Shop Three Stone Rings </h5></a>
                        </div>
                        <a href="/engagement/rings" className="engagement-images">
                            <img src={require("../images/engagement-rings/three-stone-banner.jpg")} id="rings-image"></img>
                        </a>
                    </div>
                </div>
                <Popular/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default EngagementRings2;