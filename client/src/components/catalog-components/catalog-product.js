import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/catalog-styles/product.css';

const Product = ({ link = '/', productName, description, price, imagePath, altTag = "placeholder tag" }) => {
    return ( 
        <a href={ link } className="col-sm-6 col-md-4 col-lg-4 td-none" id="catalog-product">
            <div className="card">
                <img className="card-img-top" src={ imagePath } alt={ altTag }></img>
                <div className="card-body text-center">
                    <h2 className="card-title">{ productName }</h2>
                    <p className="card-text">{ description }</p>
                    <p className="yellow"> $ { 
                        price.toString().length > 3 
                        ? price.toString().slice(0, price.toString().length - 3) + ',' + price.toString().slice(price.toString().length - 3) 
                        : price
                    }</p>
                </div>
            </div>
        </a>
     );
}

Product.propTypes = {
    link: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
 
export default Product;