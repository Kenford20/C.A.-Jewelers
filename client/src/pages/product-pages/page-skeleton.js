import React, { Component } from 'react';
import '../styles/product-pages-styles/product-pages.css';

const ProductPageLayout = (props) => {
    return ( 
        <div id="product-page-layout" class="products-page">
            <div class="w-100 bg-lightgrey catalog-route-border">
                <div class="container">    
                    <p class="catalog-route">
                        <a class="footer-links" href="/"> HOME </a> / 
                        <a class="footer-links" href={props.categoryRoute}> {props.categoryRouteName} </a> /  
                        <a class="footer-links" href={props.subcategoryRoute}> {props.subcategoryRouteName} </a> / 
                        <span class="catalog-route-active"> {props.productName} </span>
                    </p>
                </div>
            </div>

            <div class="row container m-auto">
                <div class="col-lg-6">
                    <div class="product-image-container">
                        <img class="product-image" src={require("../images/BeadSet.jpg")} alt="Card image cap"></img>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="product-title">
                        <h1>{props.productName}</h1>
                    </div>
                    <div class="product-price">
                        <h2 class="yellow">${props.price}</h2>
                    </div> 
                    <div class="product-description">
                        <p>{props.description}</p>
                    </div>
                    <div class="cart-btn">
                        <button class="feature-btn cart-btn">ADD TO BAG</button>
                    </div>
                    <div class="product-shipping">
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