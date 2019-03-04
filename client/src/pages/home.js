import React, { Component } from 'react';
import '../styles/global-styles.css';
import '../styles/header-nav-styles.css';

import GlobalHeader from '../components/global-header';
import HeaderImage from '../components/home-components/header-image';
import BodyOpener from '../components/home-components/body-opener';
import Diamonds from '../components/home-components/diamonds';
import CustomDesign from '../components/home-components/custom-design';
import ColorStonesSlider from '../components/home-components/fine-jewelry';
import VisitUs from '../components/home-components/visit-us';
import Testimonials from '../components/home-components/testimonials';
import GlobalFooter from '../components/global-footer';
import WeddingHeader from '../components/home-components/wedding-band';
import PopularProducts from '../components/home-components/popular';

class Home extends Component {

    componentDidMount() {
        document.title = "C.A. Jewelers: Engagement Rings & Custom Fine Jewelry | Chicago, IL";
    }

    render() { 
        return (
            <div id="home-page">
                <GlobalHeader/>
                <HeaderImage/>
                <BodyOpener/>
                <Diamonds/>
                <CustomDesign/>
                <div className="container" id="home-desktop-view">
                    <WeddingHeader/>
                    <ColorStonesSlider/>
                </div>
                <PopularProducts/>
                <VisitUs/>
                <Testimonials/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Home;