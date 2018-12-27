import React, { Component } from 'react';
import CatalogPage from '../components/catalog-components/catalog-page';

class Rings extends Component {
    render() { 
        let apiEndpoint = window.location.origin + '/api/rings';
        return ( 
            <div id="misc-rings-page">
                <CatalogPage 
                    heading = "Miscellaneous Rings"
                    categoryRoute = "/jewelry"
                    categoryRouteName = "JEWELRY"
                    subcategoryRouteName = "RINGS" 
                    pageDescription = "Ut et sapien sit amet risus dapibus dapibus quis pulvinar diam. Praesent egestas nec urna quis pretium. Nullam sagittis justo non velit dapibus, non sollicitudin leo elementum. Morbi vel eleifend mauris. Nunc at dolor non turpis ultricies condimentum. Quisque vitae risus sed nulla lacinia ullamcorper at non justo. Donec lacinia sem risus, at rutrum lorem ultrices id. Phasellus nisl sapien, porta non consequat sed, placerat at lacus. Aenean ut lorem vehicula, dapibus est vehicula, semper velit. Mauris a lorem tempor, efficitur leo gravida, dictum neque. Aliquam malesuada semper lorem in sagittis. Nam iaculis nunc et ante facilisis pulvinar. Aliquam erat volutpat. Cras ultricies finibus magna nec lobortis. Suspendisse efficitur finibus felis, at fermentum lorem dapibus nec. Nunc at lobortis quam."
                    apiEndpoint = {apiEndpoint}
                />
            </div>
         );
    }
}
 
export default Rings;