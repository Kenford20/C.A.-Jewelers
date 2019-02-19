import React from 'react';
import PropTypes from 'prop-types';
import Product from './catalog-product';
import '../../styles/catalog-styles/products-list.css';

const ProductsList = ({ products }) => {
    return ( 
        <div className="container">
            {products.map(product => 
                <Product 
                    key={ product._id } 
                    imagePath={ product.imagePath }
                    altTag = { product.altTag }
                    productName={ product.title } 
                    description={ product.description } 
                    price={ product.price } 
                    link={ product.link }
                    category={ product.category }
                    style={ product.subcategory }
                />
            )}
        </div>
    );
}

ProductsList.propTypes = {
    products: PropTypes.array.isRequired
}
 
export default ProductsList;
