import React from 'react';
import '../../styles/catalog-styles/catalog-top.css';

const CatalogTop = (props) => {
    return ( 
        <div id="catalog-top">
            <div class="w-100">
                <div class="container text-center">
                    <h1>{props.heading}</h1>
                    <p>{props.pageDescription}</p>
                </div>
            </div>
            <div class="w-100 bg-lightgrey catalog-route-border">
                <div class="container">    
                    <p class="catalog-route">
                        <a href="/"> HOME </a> / 
                        <a href={props.categoryRoute}> {props.categoryRouteName} </a> /  
                        <span class="catalog-route-active"> {props.subcategoryRouteName} </span>
                    </p>
                </div>
            </div>
            <div id="sort" class="hide container">
                <div class="row">
                    <div class="col-lg-7 text-right">
                        <span> {props.numProducts} ITEMS </span>
                    </div>
                    <div class="col-lg-5 text-right"> 
                    <span>Sort By: </span>
                        <select id="sort-select">
                            <option value="quote">Best Sellers</option>
                            <option value="alphanumeric">Price: Low to High</option>
                            <option value="paragraph">Price: High to Low</option>
                        </select>
                    </div>
                </div>             
            </div>
        </div>
     );
}
 
export default CatalogTop;