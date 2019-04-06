import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import JewelryHeader from '../components/jewelry-components/jewelry-header';
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
                <JewelryHeader/>
                <div className="container">  
                    <div id="earrings" className="jewelry-sub-containers">
                        <a href="/jewelry/earrings" className="jewelry-images">
                            <img src={require('../images/jewelry/popular-earrings.jpg')} id="earrings-image"></img>
                        </a>
                        <div className="jewelry-containers">
                            <h4 className="jewelry-caption-header"> C.A. EARRINGS </h4>
                            <p> Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis.</p>
                            <a href="/jewelry/earrings"><h5 className="jewelry-caption-text"> Shop for Earrings </h5></a>
                        </div>
                    </div>

                    <div id="bracelets" className="jewelry-sub-containers">
                        <div className="jewelry-containers">
                            <h4 className="jewelry-caption-header"> C.A. BRACELETS </h4>
                            <p>Anim ut et non eu mollit labore fugiat labore. Qui elit esse excepteur voluptate qui mollit.</p>
                            <a href="/jewelry/bracelets"><h5 className="jewelry-caption-text"> Shop for Bracelets </h5></a>
                        </div>
                        <a href="/jewelry/bracelets" className="jewelry-images">
                            <img src="https://s3.amazonaws.com/media-cajewelers.com/bracelet.jpg" id="bracelets-image"></img>
                        </a>
                    </div>

                    <div id="necklaces" className="jewelry-sub-containers">
                        <a href="/jewelry/necklaces" className="jewelry-images">
                            <img src="https://s3.amazonaws.com/media-cajewelers.com/NecklaceClose.jpg" id="necklaces-image"></img>
                        </a>
                        <div className="jewelry-containers">
                            <h4 className="jewelry-caption-header"> C.A. NECKLACES </h4>
                            <p> Excepteur commodo nisi aliquip laboris ipsum cillum dolor ea laboris cillum minim ut sit magna. </p>
                            <a href="/jewelry/necklaces"><h5 className="jewelry-caption-text"> Shop for Necklaces </h5></a>
                        </div>
                    </div>

                    <div id="rings" className="jewelry-sub-containers">
                        <div className="jewelry-containers">
                            <h4 className="jewelry-caption-header"> C.A. RINGS </h4>
                            <p> Eu irure pariatur non excepteur ipsum dolor do nostrud minim fugiat magna do. Non duis incididunt irure duis culpa.</p>
                            <a href="/jewelry/rings"><h5 className="jewelry-caption-text"> Shop for Rings </h5></a>
                        </div>
                        <a href="/jewelry/rings" className="jewelry-images">
                            <img src={require("../images/purple-halo.jpeg")} id="rings-image"></img>
                        </a>
                    </div>
                </div>
                <CheapProducts/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Jewelry;