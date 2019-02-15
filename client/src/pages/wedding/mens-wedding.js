import React, { Component } from 'react';
import CatalogPage from '../../components/catalog-components/catalog-page';

class MensWeddingRings extends Component {
    render() { 
        let apiEndpoint = window.location.origin + '/api/halo-engagement-rings';
        return ( 
            <div id="mens-wedding-rings-page">
                <CatalogPage 
                    heading = "Mens Wedding Bands" 
                    categoryRoute = "/wedding"
                    categoryRouteName = "WEDDING"
                    subcategoryRouteName = "MENS WEDDING BANDS" 
                    pageDescription = "In laoreet lacus metus, non facilisis elit semper sed. Donec ornare malesuada luctus. Nam ut quam facilisis, aliquam eros sed, tempus lacus. Sed pretium, ligula vitae aliquet tempus, nulla leo hendrerit augue, vitae sodales est tellus ac nunc. Nam consectetur quis augue sed vehicula. Nunc odio ipsum, commodo nec diam non, ullamcorper dictum ipsum. Quisque varius posuere magna, a luctus neque pharetra id. Mauris non erat et mi luctus dignissim. Nullam eu pellentesque justo, vel congue libero. Maecenas rhoncus, lectus sit amet vestibulum posuere, nibh velit luctus ipsum, et faucibus quam nisi eu magna. Aenean ullamcorper leo metus, ut condimentum ante commodo sed. Vivamus accumsan tellus eu felis porta facilisis. Fusce sodales venenatis metus sit amet dignissim. Etiam eu elit orci. Donec convallis ac ipsum ac elementum."
                    apiEndpoint = {apiEndpoint}
                />
            </div>
         );
    }
}
 
export default MensWeddingRings;