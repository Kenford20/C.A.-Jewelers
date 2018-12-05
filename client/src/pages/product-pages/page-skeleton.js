import React, { Component } from 'react';
import '../styles/product-pages-styles/product-pages.css';

const ProductPageLayout = (props) => {
    return ( 
        <div id="product-page-layout" className="products-page">
            <div className="w-100 bg-lightgrey catalog-route-border">
                <div className="container">    
                    <p className="catalog-route">
                        <a className="footer-links" href="/"> HOME </a> / 
                        <a className="footer-links" href={props.categoryRoute}> {props.categoryRouteName} </a> /  
                        <a className="footer-links" href={props.subcategoryRoute}> {props.subcategoryRouteName} </a> / 
                        <span className="catalog-route-active"> {props.productName} </span>
                    </p>
                </div>
            </div>

            <div className="row container m-auto">
                <div className="col-lg-6">
                    <div className="product-image-container">
                        <img className="product-image" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet.jpg"} alt="Card image cap"></img>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="product-title">
                        <h1>{props.productName}</h1>
                    </div>
                    <div className="product-price">
                        <h2 className="yellow">${props.price}</h2>
                    </div> 
                    <div className="product-description">
                        <p>{props.description}</p>
                    </div>
                    <div className="cart-btn">
                        <button className="feature-btn cart-btn">ADD TO BAG</button>
                    </div>
                    <div className="product-shipping">
                        <br></br>
                        <p>FREE SHIPPING & FREE RETURNS</p>
                        <p>Order now for delivery by tomorrow, January 1</p>
                    </div>


                </div>
            </div>

        </div>
        );
}
 
export default ProductPageLayout;