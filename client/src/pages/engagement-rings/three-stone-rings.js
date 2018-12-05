import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import ProductsList from '../components/catalog-components/productsList';
import CatalogTop from '../components/catalog-components/catalog-top';
import FilterSort from '../components/catalog-components/filter-sort'; 
import FilterSortMobile from '../components/catalog-components/filter-sort-mobile';
import NumItemsMobile from '../components/catalog-components/num-items-mobile';


class ThreeStoneEngagementRings extends Component {
    state = {
        products: [],
        numProducts: 0,
    };

    componentDidMount(){
        //let apiEndpoint = 'http://localhost:4000/api/three-stone-engagement-rings';
        let apiEndpoint = window.location.origin+'/api/three-stone-engagement-rings';
        axios.get(apiEndpoint).then(res=> {
            console.log(res);
            this.setState({products: res.data});
            this.setState({numProducts: this.state.products.length});
        });
    }

    render() { 
        return ( 
            <div id="three-stone-engagement-rings-page">
                <GlobalHeader/>
                <CatalogTop heading="Three-Stone Engagement Rings" 
                    categoryRoute="/engagement-rings"
                    categoryRouteName="ENGAGEMENT RINGS"
                    subcategoryRouteName="THREE-STONE RINGS" 
                    pageDescription="Nam in tristique nisi. Sed tristique nibh at ipsum rutrum venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla placerat mi leo, ac efficitur lectus ornare ut. Aliquam erat volutpat. Pellentesque consectetur laoreet elit, nec consequat mi fermentum at. Praesent tempus mollis dolor eu pretium. Mauris sed feugiat neque, ac suscipit risus. Sed efficitur tellus a lacus viverra, ac hendrerit nibh malesuada. Ut congue tincidunt feugiat. Etiam in dui eget quam auctor volutpat id vel nulla. In elementum velit velit. Proin vel tempor elit."
                    numProducts={this.state.numProducts}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterSort/>
                            <FilterSortMobile/>
                            <NumItemsMobile numProducts={this.state.numProducts}/>
                        </div>
                      
                        <div className="col-lg-9">
                            <ProductsList products={this.state.products}/>
                        </div>
                    </div>
                </div>
                <GlobalFooter/>
            </div>
         );
    }
}
 
export default ThreeStoneEngagementRings;