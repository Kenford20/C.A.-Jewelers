import React from 'react'; 
import GlobalHeader from './components/global-header';
import GlobalFooter from './components/global-footer';
import FAQDescription from './components/faq-components/faq-description';

const FAQ = () => {
    return ( 
        <div id="faq">
            <GlobalHeader/>
            <FAQDescription/>
            <GlobalFooter/>
        </div>
     );
}
 
export default FAQ;