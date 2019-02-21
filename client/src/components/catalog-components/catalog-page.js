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

        axios.get(this.props.apiEndpoint)
        .then(response => {
            console.log(response);
            this.setState({ 
                products: response.data,
                filteredProducts: response.data,
                fetchingProducts: false
            });
            this.setState({ numProducts: this.state.products.length });
        })
        .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }

    updateFilters(e) {
        let filterType = e.target.parentNode.id;
        let selectedOption = e.target.innerHTML;

        // style the active filter while keeping the unactive filters' styles unchanged
        [...document.getElementById(filterType)
            .getElementsByClassName('filter-options')]
            .map(el => { 
                el.style.background = 'white'
                el.style.color = 'rgb(100, 100, 100)'
        });
                
        e.target.style.background = '#b59734';
        e.target.style.color = 'white';
            
        switch(filterType) {
            case 'style-filter':
            case 'style-filter-mobile': {
                let filterOption = 'style';
                this.changeFilterState(selectedOption, filterOption, null, e.target);
            } break;

            case 'shape-filter':
            case 'shape-filter-mobile': {
                let filterOption = 'shape';
                this.changeFilterState(selectedOption, filterOption, null, e.target);
            } break;

            case 'metal-filter':
            case 'metal-filter-mobile': {
                let filterOption = 'metal';
                this.changeFilterState(selectedOption, filterOption, null, e.target);
            } break;

            case 'price-filter':
            case 'price-filter-mobile': {
                let filterOption = 'price';
                let priceRange = selectedOption === '$ 500 or less' ? [0, 500] :
                                 selectedOption === '$ 501 - 1000' ? [501, 1000] :
                                 selectedOption === '$ 1001 - 3000' ? [1001, 3000] :
                                 selectedOption === '$ 3001 - 5000' ? [3001, 5000] : [5000, 1000000];
                this.changeFilterState(selectedOption, filterOption, priceRange, e.target);
            } break;

            default: alert('something went wrong');
        }
    }

    changeFilterState(selectedOption, filterOption, priceRange, e) {
        // handle removing an already active price filter by converting array values into strings to be compared in the if block below
        if(filterOption === 'price') {
            selectedOption = `${priceRange[0]} ${priceRange[1]}`;
            this.state.filterOptions[filterOption] = `${this.state.filterOptions[filterOption][0]} ${this.state.filterOptions[filterOption][1]}`;
        }

        // remove filter if selected filter is already active
        if(selectedOption === this.state.filterOptions[filterOption]) {
            e.style.background = 'white';
            e.style.color = 'rgb(100, 100, 100)';

            this.setState(prevState => ({
                filterOptions: {
                    ...prevState.filterOptions,
                    [filterOption]: filterOption === 'price' ? [0, 100000] : ''
                },
                areFiltersActive: {
                    ...prevState.areFiltersActive,
                    [filterOption]: false
                }
            }), this.filterProducts);
        } else { // apply filter
            this.setState(prevState => ({ 
                filterOptions: {
                    ...prevState.filterOptions, 
                    [filterOption]: filterOption === 'price' ? priceRange : selectedOption,
                },
                areFiltersActive: {
                    ...prevState.areFiltersActive,
                    [filterOption]: true
                }
            }), this.filterProducts); 
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
        // reset the styles of any active filters
        [...document.getElementById('filter-sort')
        .getElementsByClassName('filter-options')]
        .map(el => { 
            el.style.background = 'white'
            el.style.color = 'rgb(100, 100, 100)'
        });

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