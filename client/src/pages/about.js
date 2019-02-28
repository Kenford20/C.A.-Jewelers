import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import AboutDescription from '../components/about-components/about-description';

import '../styles/about-styles/about.css';

class About extends React.Component {
    componentDidMount() {
        document.title = "About C.A. Jewelers | Chicago's Jewelers Row";
    }
    render () {
        return ( 
            <div id="about-page">
                <GlobalHeader/>
                <AboutDescription/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default About;