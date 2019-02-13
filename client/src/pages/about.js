import React from 'react';
import GlobalHeader from './components/global-header';
import GlobalFooter from './components/global-footer';
import AboutDescription from './components/about-components/about-description';

import './styles/about-styles/about.css';

const About = () => {
    return ( 
        <div id="about-page">
            <GlobalHeader/>
            <AboutDescription/>
            <GlobalFooter/>
        </div>
     );
}
 
export default About;