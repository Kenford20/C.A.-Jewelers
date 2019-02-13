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
        this.updateFilters = this.updateFilters.bind(this);
        
        this.state = {
            products: [],
            filteredProducts: [],
            numProducts: 0,
            filterOptions: {
                style: '',
                shape: '',
                metal: '',
                price: [0, 1000000]
            }
        }
    }
    
    componentDidMount(){        
        axios.get(this.props.apiEndpoint).then(response => {
            console.log(response);
            this.setState({ 
                products: response.data,
                filteredProducts: response.data
            });
            this.setState({ numProducts: this.state.products.length });
        });
    }

    updateFilters(e) {
        let filterType = e.target.parentNode.id;
        let selectedOption = e.target.innerHTML;

        switch(filterType) {
            case 'style-filter':
            case 'style-filter-mobile': this.setState(prevState => ({ 
                filterOptions: {
                    ...prevState.filterOptions, 
                    style: selectedOption
                }
            }), this.filterProducts); break;

            case 'shape-filter':
            case 'shape-filter-mobile': this.setState(prevState => ({ 
                filterOptions: {
                    ...prevState.filterOptions, 
                    shape: selectedOption
                }
            }), this.filterProducts); break;

            case 'metal-filter':
            case 'metal-filter-mobile': this.setState(prevState => ({ 
                filterOptions: {
                    ...prevState.filterOptions, 
                    metal: selectedOption
                }
            }), this.filterProducts); break;

            case 'price-filter':
            case 'price-filter-mobile': this.setState(prevState => ({ 
                filterOptions: {
                    ...prevState.filterOptions, 
                    price: selectedOption === '$ 500 or less' ? [0, 500] :
                    selectedOption === '$ 501 - 1000' ? [501, 1000] :
                    selectedOption === '$ 1001 - 3000' ? [1001, 3000] :
                    selectedOption === '$ 3001 - 5000' ? [3001, 5000] : [5000, 1000000]
                }
            }), this.filterProducts); break;

            default: alert('something went wrong');
        }
    }

    filterProducts() {
        const { style, price } = this.state.filterOptions;

        this.setState({ 
            filteredProducts: this.state.products.filter(product => {
                if(product.subcategory === style.toLowerCase() && 
                  (product.price > price[0] && product.price < price[1]))
                    return product;
            })}, () => { 
                this.setState({ numProducts: this.state.filteredProducts.length 
            });
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
                            <FilterSort updateFilters={ this.updateFilters }/>
                            <FilterSortMobile updateFilters={ this.updateFilters }/>
                            <NumItemsMobile numProducts={ this.state.numProducts }/>
                        </div>
                       
                        <div className="col-lg-9">
                            <ProductsList products={ this.state.filteredProducts }/>
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