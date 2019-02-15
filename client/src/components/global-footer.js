import React from 'react';
import FooterInfo from './footer-components/footer-info';
import MobileFooter from './footer-components/mobile-footer';
import Email from './footer-components/email';
import Socials from './footer-components/socials';

import '../styles/footer.css';

const GlobalFooter = () => {
    return (
        <div id="global-footer">
            <Email />
            <MobileFooter/>
            <FooterInfo/>

            { /* Copyright and Social Links */ }
            <div id="footer-container">
                <div id="footer"> 
                    <h6 className="text-center">C.A. Jewelers Inc. © 2018 
                    <span>|</span>Privacy Policy
                    <span>|</span>Terms & Conditions
                    <span>|</span>Site Map</h6> 
                </div>
                <Socials/>
            </div>
        </div>
     );
}
 
export default GlobalFooter;