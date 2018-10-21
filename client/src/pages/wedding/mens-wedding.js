import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import ProductsList from '../components/catalog-components/productsList';
import CatalogTop from '../components/catalog-components/catalog-top';
import FilterSort from '../components/catalog-components/filter-sort'; 
import FilterSortMobile from '../components/catalog-components/filter-sort-mobile';
import NumItemsMobile from '../components/catalog-components/num-items-mobile';


class MensWeddingRings extends Component {
    state = {
        products: [],
        numProducts: 0,
    };

    componentDidMount(){
        //let apiEndpoint = 'http://localhost:4000/api/all-rings';
        let apiEndpoint = window.location.origin+'/api/mens-wedding-rings';

        axios.get(apiEndpoint).then(res=> {
            console.log(res);
            this.setState({products: res.data});
            this.setState({numProducts: this.state.products.length});
        });
    }

    render() { 
        return ( 
            <div id="mens-wedding-rings-page">
                <GlobalHeader/>
                <CatalogTop heading="Mens Wedding Bands" 
                    categoryRoute="/wedding"
                    categoryRouteName="WEDDING"
                    subcategoryRouteName="MENS WEDDING BANDS" 
                    pageDescription="In laoreet lacus metus, non facilisis elit semper sed. Donec ornare malesuada luctus. Nam ut quam facilisis, aliquam eros sed, tempus lacus. Sed pretium, ligula vitae aliquet tempus, nulla leo hendrerit augue, vitae sodales est tellus ac nunc. Nam consectetur quis augue sed vehicula. Nunc odio ipsum, commodo nec diam non, ullamcorper dictum ipsum. Quisque varius posuere magna, a luctus neque pharetra id. Mauris non erat et mi luctus dignissim. Nullam eu pellentesque justo, vel congue libero. Maecenas rhoncus, lectus sit amet vestibulum posuere, nibh velit luctus ipsum, et faucibus quam nisi eu magna. Aenean ullamcorper leo metus, ut condimentum ante commodo sed. Vivamus accumsan tellus eu felis porta facilisis. Fusce sodales venenatis metus sit amet dignissim. Etiam eu elit orci. Donec convallis ac ipsum ac elementum."
                    numProducts={this.state.numProducts}
                />

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <FilterSort/>
                            <FilterSortMobile/>
                            <NumItemsMobile numProducts={this.state.numProducts}/>
                        </div>
                       
                        <div class="col-lg-9">
                            <ProductsList products={this.state.products}/>
                        </div>
                    </div>
                </div>
                <GlobalFooter/>    
            </div>
         );
    }
}
 
export default MensWeddingRings;