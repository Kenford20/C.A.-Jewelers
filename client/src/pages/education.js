import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EducationDescription from '../components/education-components/education-description';

import '../styles/education-styles/education.css';

class Education extends React.Component {
    componentDidMount() {
        document.title = 'Learn About Diamonds | C.A. Jewelers';
    }
    
    render() {
        return ( 
            <div id="education-page">
                <GlobalHeader/>
                <EducationDescription/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Education;