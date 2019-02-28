import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import EngagementHeader from '../components/engagement-ring-components/engagement-header';
import Solitaires from '../components/engagement-ring-components/solitaire';
import Halo from '../components/engagement-ring-components/halo';
import ThreeStone from '../components/engagement-ring-components/three-stone';
import Vintage from '../components/engagement-ring-components/vintage';
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
                <Solitaires/>
                <Halo/>
                <ThreeStone/>
                <Vintage/>
                <Popular/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default EngagementRings;