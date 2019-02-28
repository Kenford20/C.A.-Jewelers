import React from 'react'; 
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import FAQDescription from '../components/faq-components/faq-description';

class FAQ extends React.Component {
    componentDidMount() {
        document.title = 'Frequently Asked Questions | C.A. Jewelers';
    }

    render() {
        return ( 
            <div id="faq">
                <GlobalHeader/>
                <FAQDescription/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default FAQ;