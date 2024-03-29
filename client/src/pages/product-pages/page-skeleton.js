import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

import '../../styles/product-pages-styles/product-pages.css';

class ProductPageLayout extends React.Component {
    addItemToBag = (e) => {
        let ringSize = document.querySelector('#ring-size-dropdown').value;
        if(ringSize === '') {
            e.preventDefault();
            alert('Please select a ring size!');
        } else {
            let itemDetails = {
                productId: this.props.productId,
                productUrl: this.props.productUrl,
                imgUrl: this.props.imgUrl,
                name: this.props.productName,
                price: this.props.price,
                description: this.props.description,
                categoryRoute: this.props.categoryRoute,
                categoryRouteName: this.props.categoryRouteName,
                subcategoryRoute: this.props.subcategoryRoute,
                subcategoryRouteName: this.props.subcategoryRouteName,
                quantity: 1,
                ringSize: ringSize
            }
            this.props.addToCart(itemDetails);
        }
    }

    render() {
        const { imgUrl, categoryRoute, categoryRouteName, subcategoryRoute, subcategoryRouteName, productName, price, description } = this.props;
    return ( 
        <div id="product-page-layout" className="products-page">
            <div className="w-100 bg-lightgrey catalog-route-border">
                <div className="container">    
                    <p className="catalog-route">
                        <a className="footer-links" href="/"> HOME </a> <span className="route-separators">/</span>
                        <a className="footer-links" href={ categoryRoute }> { categoryRouteName } </a> <span className="route-separators">/</span> 
                        <a className="footer-links" href={ subcategoryRoute }> { subcategoryRouteName } </a> <span className="route-separators">/</span>
                        <span className="catalog-route-active"> { productName } </span>
                    </p>
                </div>
            </div>

            <div className="row container m-auto">
                <div className="col-lg-7">
                    <div className="product-image-container">
                        <img className="product-image" src={ imgUrl } alt="Card image cap"></img>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="product-title">
                        <h1>{ productName }</h1>
                    </div>
                    <div className="product-price">
                        <h2 className="yellow">${ 
                            price.toString().length > 6
                            ? price.toString().slice(0, price.toString().length - 6) + ',' + price.toString().slice(price.toString().length - 6) 
                            : price
                        }</h2>
                    </div> 
                    <div className="product-description">
                        <p>{ description }</p>
                    </div>
                    <div className="ring-size">
                        <select id="ring-size-dropdown">
                            <option value="" selected disabled hidden>Ring Size</option>
                            <option value="4">4</option>
                            <option value="4.5">4.5</option>
                            <option value="5">5</option>
                            <option value="5.5">5.5</option>
                            <option value="6">6</option>
                            <option value="6.5">6.5</option>
                            <option value="7">7</option>
                            <option value="7.5">7.5</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="cart-btn">
                        <a href="/cart" className="feature-btn cart-btn" onClick={ this.addItemToBag }>ADD TO BAG</a>
                    </div>
                    <div className="product-shipping">
                        <br></br>
                        <p>FREE SHIPPING & FREE RETURNS</p>
                        <p>Order now for delivery by tomorrow, January 1</p>
                    </div>

                </div>
            </div>

            <div className="product-details bg-light">
                <br></br><br></br><h2 className="text-center">PRODUCT DETAILS</h2><br></br>
                <div className="row container m-auto">
                    <div className="col-md-6 col-lg-3">
                        <h3>INFORMATION</h3>
                        <p>Metal: 14K Silver Gold</p>
                        <p>Width: 1 in.</p>
                        <p>Length: 0.5 in.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>CHAIN DETAILS</h3>
                        <p>Type: Cable Chain</p>
                        <p>Clasp: Spring Clasp</p>
                        <p>Chain Length: 17 in.</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>GEMSTONE DETAILS</h3>
                        <p>Carat Weight: 0.05</p>
                        <p>Center Gemstone: Ruby</p>
                        <p>Gemstone Shape: Oval</p>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h3>ADDITIONAL DETAILS</h3>
                        <p>Carat Weight: 0.05</p>
                        <p>Center Gemstone: Ruby</p>
                        <p>Gemstone Shape: Oval</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

ProductPageLayout.propTypes = {
    categoryRoute: PropTypes.string.isRequired,
    categoryRouteName: PropTypes.string.isRequired,
    subcategoryRoute: PropTypes.string.isRequired,
    subcategoryRouteName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    productUrl: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired
}
 
export default connect(null, { addToCart })(ProductPageLayout);