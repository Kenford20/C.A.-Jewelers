import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EngagementHeader from '../components/engagement-ring-components/engagement-header';
import EngagementBody from '../components/engagement-ring-components/engagement-body';
import Popular from '../components/home-components/popular';

import '../styles/engagement-ring-styles/engagement-ring.css';

class EngagementRings extends React.Component {
    componentDidMount() {
        document.title = 'Engagement Rings | C.A. Jewelers Diamond Rings';
    }
    render() {
        return ( 
            <div id="engagement-rings-page">
                <GlobalHeader/>
                <EngagementHeader/>
                <EngagementBody/>
                <Popular/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default EngagementRings;