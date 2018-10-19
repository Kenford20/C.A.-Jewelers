import React, { Component } from 'react';
import axios from 'axios';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import ProductsList from '../components/catalog-components/productsList';
import CatalogTop from '../components/catalog-components/catalog-top';
import FilterSort from '../components/catalog-components/filter-sort'; 
import FilterSortMobile from '../components/catalog-components/filter-sort-mobile';
import NumItemsMobile from '../components/catalog-components/num-items-mobile';


class Earrings extends Component {
    state = {
        products: [],
        numProducts: 0,
    };

    componentDidMount(){
        let apiEndpoint = 'http://localhost:4000/api/vintage-engagement-rings';
        axios.get(apiEndpoint).then(res=> {
            console.log(res);
            this.setState({products: res.data});
            this.setState({numProducts: this.state.products.length});
        });
    }

    render() { 
        return ( 
            <div id="earrings-page">
                <GlobalHeader/>
                <CatalogTop heading="Earrings" 
                    categoryRoute="/jewelry"
                    categoryRouteName="JEWELRY"
                    subcategoryRouteName="EARRINGS" 
                    pageDescription="Ut et sapien sit amet risus dapibus dapibus quis pulvinar diam. Praesent egestas nec urna quis pretium. Nullam sagittis justo non velit dapibus, non sollicitudin leo elementum. Morbi vel eleifend mauris. Nunc at dolor non turpis ultricies condimentum. Quisque vitae risus sed nulla lacinia ullamcorper at non justo. Donec lacinia sem risus, at rutrum lorem ultrices id. Phasellus nisl sapien, porta non consequat sed, placerat at lacus. Aenean ut lorem vehicula, dapibus est vehicula, semper velit. Mauris a lorem tempor, efficitur leo gravida, dictum neque. Aliquam malesuada semper lorem in sagittis. Nam iaculis nunc et ante facilisis pulvinar. Aliquam erat volutpat. Cras ultricies finibus magna nec lobortis. Suspendisse efficitur finibus felis, at fermentum lorem dapibus nec. Nunc at lobortis quam."
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
 
export default Earrings;