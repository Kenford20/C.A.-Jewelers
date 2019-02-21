import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/catalog-styles/catalog-top.css';

const CatalogTop = ({ heading, pageDescription, categoryRoute, categoryRouteName, subcategoryRouteName, numProducts, sortProducts }) => {
    return ( 
        <div id="catalog-top">
            <div className="w-100">
                <div className="container text-center">
                    <h1>{ heading }</h1>
                    <p>{ pageDescription }</p>
                </div>
            </div>
            <div className="w-100 bg-lightgrey catalog-route-border">
                <div className="container">    
                    <p className="catalog-route">
                        <a href="/">HOME</a> <span className="route-separators">/</span>
                        <a href={ categoryRoute }> { categoryRouteName } </a> <span className="route-separators">/</span>
                        <span className="catalog-route-active"> { subcategoryRouteName } </span>
                    </p>
                </div>
            </div>
            <div id="sort" className="hide container">
                <div className="row">
                    <div className="col-lg-7 text-right">
                        <span> { numProducts } ITEMS </span>
                    </div>
                    <div className="col-lg-5 text-right"> 
                        <span>Sort By: </span>
                        <select id="sort-select" onChange={ sortProducts }>
                            <option value="best-sellers">Best Sellers</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>             
            </div>
        </div>
    );
}

CatalogTop.propTypes = {
    heading: PropTypes.string.isRequired,
    pageDescription: PropTypes.string.isRequired,
    categoryRoute: PropTypes.string.isRequired,
    categoryRouteName: PropTypes.string.isRequired,
    subcategoryRouteName: PropTypes.string.isRequired,
    numProducts: PropTypes.number.isRequired
};
    
export default CatalogTop;