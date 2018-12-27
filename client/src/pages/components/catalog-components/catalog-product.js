import React, { Component } from 'react';
import '../../styles/catalog-styles/product.css';

const Product = (props) => {
    return ( 
        <a href={props.link} className="col-sm-6 col-md-4 col-lg-4 td-none" id="catalog-product">
            <div className="card">
                <img className="card-img-top" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet-resized.jpg"} alt="Card image cap"></img>
                <div className="card-body text-center">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-text">{props.description}</p>
                    <p className="yellow">${props.price}</p>
                </div>
            </div>
        </a>
     );
}
 
export default Product;