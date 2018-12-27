import React, { Component } from 'react';
import axios from 'axios';
import Product from './catalog-product';
import '../../styles/catalog-styles/products-list.css';

const ProductsList = (props) => {
    return ( 
        <div className="container">
            {props.products.map(product => 
                <Product 
                    key={product._id} 
                    path={product.imagePath} title={product.title} 
                    description={product.description} price={product.price} 
                    link={product.link}
                />
            )}
        </div>
    );
}
 
export default ProductsList;
