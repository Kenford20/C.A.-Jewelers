import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        const { heading, categoryRoute, categoryRouteName, subcategoryRouteName, pageDescription } = this.props;
        return ( 
            <div id="catalog-page">
                <GlobalHeader/>
                <CatalogTop 
                    heading = { heading } 
                    categoryRoute = { categoryRoute }
                    categoryRouteName = { categoryRouteName }
                    subcategoryRouteName = { subcategoryRouteName }
                    pageDescription = { pageDescription }
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
    
CatalogPage.propTypes = {
    heading: PropTypes.string.isRequired,
    categoryRoute: PropTypes.string.isRequired,
    categoryRouteName: PropTypes.string.isRequired,
    subcategoryRouteName: PropTypes.string.isRequired,
    pageDescription: PropTypes.string.isRequired,
    apiEndpoint: PropTypes.string.isRequired
}

export default CatalogPage;