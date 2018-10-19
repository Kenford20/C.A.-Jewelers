import React from 'react';
import GlobalHeader from './components/global-header';
import GlobalFooter from './components/global-footer';
import Map from './components/contact-components/map';
import ContactInfo from './components/contact-components/contact-info';

const Contact = () => {
    return ( 
        <div id="contact-page">
            <GlobalHeader/>
            <ContactInfo/>
            <Map/>
            <GlobalFooter/>
        </div>
     );
}
 
export default Contact;