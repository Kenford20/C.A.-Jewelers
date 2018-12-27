import React, { Component } from 'react';
import CatalogPage from '../components/catalog-components/catalog-page';

class EngagementRings extends Component {
    render() { 
        let apiEndpoint = window.location.origin + '/api/all-rings';
        return ( 
            <div id="engagement-rings-page">
                <CatalogPage 
                    heading = "Engagement Rings" 
                    categoryRoute = "/engagement-rings"
                    categoryRouteName = "ENGAGEMENT RINGS"
                    subcategoryRouteName = "ALL RINGS" 
                    pageDescription = "Nam in tristique nisi. Sed tristique nibh at ipsum rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat mi leo, ac efficitur lectus ornare ut. Aliquam erat volutpat. Pellentesque consectetur laoreet elit, nec consequat mi fermentum at. Praesent tempus mollis dolor eu pretium. Mauris sed feugiat neque, ac suscipit risus. Sed efficitur tellus a lacus viverra, ac hendrerit nibh malesuada. Ut congue tincidunt feugiat. Etiam in dui eget quam auctor volutpat id vel nulla. In elementum velit velit. Proin vel tempor elit."
                    apiEndpoint = { apiEndpoint }
                />
            </div>
         );
    }
}
 
export default EngagementRings;