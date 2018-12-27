import React, { Component } from 'react';
import axios from 'axios';

import GlobalHeader from '../../components/global-header';
import GlobalFooter from '../../components/global-footer';
import ProductsList from '../../components/catalog-components/productsList';
import CatalogTop from '../../components/catalog-components/catalog-top';
import FilterSort from '../../components/catalog-components/filter-sort'; 
import FilterSortMobile from '../../components/catalog-components/filter-sort-mobile';
import NumItemsMobile from '../../components/catalog-components/num-items-mobile';


class CatalogPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],
            numProducts: 0,
        }
    }

    componentDidMount(){        
        axios.get(this.props.apiEndpoint).then(response => {
            console.log(response);
            this.setState({ products: response.data });
            this.setState({ numProducts: this.state.products.length });
        });
    }

    render() { 
        return ( 
            <div id="catalog-page">
                <GlobalHeader/>
                <CatalogTop 
                    heading = { this.props.heading } 
                    categoryRoute = { this.props.categoryRoute }
                    categoryRouteName = { this.props.categoryRouteName }
                    subcategoryRouteName = { this.props.subcategoryRouteName }
                    pageDescription = { this.props.pageDescription }
                    numProducts = { this.state.numProducts }
                />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterSort/>
                            <FilterSortMobile/>
                            <NumItemsMobile numProducts={ this.state.numProducts }/>
                        </div>
                       
                        <div className="col-lg-9">
                            <ProductsList products={ this.state.products }/>
                        </div>
                    </div>
                </div>
                <GlobalFooter/>    
            </div>
         );
    }
}
 
export default CatalogPage;