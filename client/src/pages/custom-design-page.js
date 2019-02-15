import React, { Component } from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import DesignHeader from '../components/custom-design/header-image';
import DesignBody from '../components/custom-design/design-body';
import '../styles/custom-design-styles/custom-design.css';

class CustomDesign extends Component {
    state = { 

    }

    componentWillMount(){
       document.title = "Custom Designed Jewelry | C.A. Jewelers"
    }

    render() { 
        return ( 
            <div id="custom-design-page">
                <GlobalHeader/>
                <DesignHeader/>
                <DesignBody/>
                <GlobalFooter/>
            </div>
         );
    }
}
 
export default CustomDesign;