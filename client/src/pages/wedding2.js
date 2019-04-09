import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import WomensWeddingSlider from '../components/wedding-components/womens-rings-slider';
import MensWeddingSlider from '../components/wedding-components/mens-rings-slider';
import CheapProducts from '../components/jewelry-components/cheap-products';

import '../styles/wedding-styles/wedding2.css';

class Wedding2 extends React.Component {
    componentDidMount() {
        document.title = 'Anniversary and Wedding Bands | C.A. Jewelers';
    }
    render() {
        return ( 
            <div id="wedding-page">
                <GlobalHeader/>
                    <div id="wedding-header">
                        <img src={require("../images/wedding-header3.jpg")} alt="grayscale image of two newly weds"></img>
                        <div id="wedding-header-text">
                            <h1>Wedding & Anniversary Bands</h1>
                            <p>Anim ut non velit aliquip duis cillum id irure occaecat nisi.</p>
                            <button id="wedding-header-btn">Shop Wedding Rings</button>
                        </div>
                    </div>

                    <div className="container">  
                        <div id="mens-wedding-rings" className="wedding-sub-containers">
                            <a href="/wedding/mens-wedding-rings" className="wedding-images">
                                <img src={require('../images/wedding-bands/wedding-page1.jpg')} id="earrings-image"></img>
                            </a>
                            <div className="wedding-containers">
                                <h4 className="wedding-caption-header"> MENS WEDDING BANDS </h4>
                                <p> Fugiat cupidatat deserunt nulla tempor labore quis mollit minim culpa voluptate quis.</p>
                                <a href="/wedding/mens-wedding-rings"><h5 className="wedding-caption-text"> Shop Mens' Bands </h5></a>
                            </div>
                        </div>

                        <div id="womens-wedding-rings" className="wedding-sub-containers">
                            <div className="wedding-containers">
                                <h4 className="wedding-caption-header"> WOMENS WEDDING BANDS </h4>
                                <p>Anim ut et non eu mollit labore fugiat labore. Qui elit esse excepteur voluptate qui mollit.</p>
                                <a href="/wedding/womens-wedding-rings"><h5 className="wedding-caption-text"> Shop Womens' Bands </h5></a>
                            </div>
                            <a href="/wedding/womens-wedding-rings" className="wedding-images">
                                <img src={require('../images/wedding-bands/wedding-page3.jpg')} id="bracelets-image"></img>
                            </a>
                        </div>
                    </div>
                    <CheapProducts/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Wedding2;