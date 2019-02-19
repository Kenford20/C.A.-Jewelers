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

import '../../styles/catalog-styles/spinner.css';

class CatalogPage extends Component {
    constructor(props){
        super(props); 
        this.updateFilters = this.updateFilters.bind(this);
        this.resetFilters = this.resetFilters.bind(this);

        this.state = {
            products: [],
            filteredProducts: [],
            numProducts: 0,
            fetchingProducts: false,
            filterOptions: {
                style: '',
                shape: '',
                metal: '',
                price: [0, 1000000]
            },
            areFiltersActive: {
                style: false,
                shape: false,
                metal: false,
                price: false
            },
        }
    }
    
    componentDidMount(){   
        this.setState({ fetchingProducts: true });     
        axios.get(this.props.apiEndpoint).then(response => {
            console.log(response);
            this.setState({ 
                products: response.data,
                filteredProducts: response.data,
                fetchingProducts: false
            });
            this.setState({ numProducts: this.state.products.length });
        });
    }

    updateFilters(e) {
        let filterType = e.target.parentNode.id;
        let selectedOption = e.target.innerHTML;

        switch(filterType) {
            case 'style-filter':
            case 'style-filter-mobile': {
                this.setState(prevState => ({ 
                    filterOptions: {
                        ...prevState.filterOptions, 
                        style: selectedOption,
                    },
                    areFiltersActive: {
                        ...prevState.areFiltersActive,
                        style: true
                    }
                }), this.filterProducts); 
            } break;

            case 'shape-filter':
            case 'shape-filter-mobile': {
                this.setState(prevState => ({ 
                    filterOptions: {
                        ...prevState.filterOptions, 
                        shape: selectedOption
                    },
                    areFiltersActive: {
                        ...prevState.areFiltersActive,
                        shape: true
                    }
                }), this.filterProducts); 
            } break;

            case 'metal-filter':
            case 'metal-filter-mobile': {
                this.setState(prevState => ({ 
                    filterOptions: {
                        ...prevState.filterOptions, 
                        metal: selectedOption
                    },
                    areFiltersActive: {
                        ...prevState.areFiltersActive,
                        metal: true
                    }
                }), this.filterProducts); 
            } break;

            case 'price-filter':
            case 'price-filter-mobile': {
                this.setState(prevState => ({ 
                    filterOptions: {
                        ...prevState.filterOptions, 
                        price: selectedOption === '$ 500 or less' ? [0, 500] :
                               selectedOption === '$ 501 - 1000' ? [501, 1000] :
                               selectedOption === '$ 1001 - 3000' ? [1001, 3000] :
                               selectedOption === '$ 3001 - 5000' ? [3001, 5000] : [5000, 1000000]
                    },
                    areFiltersActive: {
                        ...prevState.areFiltersActive,
                        price: true
                    }
                }), this.filterProducts); 
            } break;

            default: alert('something went wrong');
        }
    }

    filterProducts() {
        const { style, shape, metal, price } = this.state.filterOptions;

        // if a filter type is active, use the function as an intended filtering condition
        // otherwise, the function returns true so that it passes the if block inside the setState method below
        // took this approach to handle multiple active and inactive filters aka 'conditional if conditions'
        let shouldFilterStyle = this.state.areFiltersActive.style ? 
            (product) => { return product.subcategory === style.toLowerCase() } : 
            () => { return true };

        let shouldFilterShape = this.state.areFiltersActive.shape ? 
            (product) => { return product.stoneShape === shape.toLowerCase() } : 
            () => { return true };

        let shouldFilterMetal = this.state.areFiltersActive.metal ? 
            (product) => { return product.metal === metal.toLowerCase() } : 
            () => { return true };

        this.setState({ 
            filteredProducts: this.state.products.filter(product => {
                if(shouldFilterStyle(product) &&
                   shouldFilterShape(product) &&
                   shouldFilterMetal(product) &&
                   product.price >= price[0] && product.price <= price[1]) 
                   {
                    return product;
                }
            })}, () => { 
                this.setState({ numProducts: this.state.filteredProducts.length 
            });
        });
    }

    resetFilters() {
        this.setState({
            filterOptions: {
                style: '',
                shape: '',
                metal: '',
                price: [0, 1000000]
            },
            areFiltersActive: {
                style: false,
                shape: false,
                metal: false,
                price: false
            }
         }, this.filterProducts);
    }
    
    render() { 
        const { heading, categoryRoute, categoryRouteName, subcategoryRouteName, pageDescription } = this.props;
        
        let spinner = (
            <div id="catalog-spinner">
                <img src={require("../../images/logo.png")} alt="loading spinner"></img>
            </div>
        );

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
                            <FilterSort 
                                updateFilters={ this.updateFilters }
                                resetFilters={ this.resetFilters }
                            />
                            <FilterSortMobile 
                                updateFilters={ this.updateFilters }
                                resetFilters={ this.resetFilters }
                            />
                            <NumItemsMobile numProducts={ this.state.numProducts }/>
                        </div>
                        <div className="col-lg-9">
                            {
                                this.state.fetchingProducts 
                                ? spinner 
                                : <ProductsList products={ this.state.filteredProducts }/>
                            }
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