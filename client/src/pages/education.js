import React from 'react';
import GlobalHeader from './components/global-header';
import GlobalFooter from './components/global-footer';
import EducationDescription from './components/education-components/education-description';

const Education = () => {
    return ( 
        <div id="education-page">
            <GlobalHeader/>
            <EducationDescription/>
            <GlobalFooter/>
        </div>
     );
}
 
export default Education;