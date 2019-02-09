import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/catalog-styles/product.css';

const Product = ({ link = '/', productName, description, price, imagePath }) => {
    return ( 
        <a href={ link } className="col-sm-6 col-md-4 col-lg-4 td-none" id="catalog-product">
            <div className="card">
                {/*imgpath goes here */}
                <img className="card-img-top" src={"https://s3.amazonaws.com/media-cajewelers.com/BeadSet-resized.jpg"} alt="Card image cap"></img>
                <div className="card-body text-center">
                    <h2 className="card-title">{ productName }</h2>
                    <p className="card-text">{ description }</p>
                    <p className="yellow">${ price }</p>
                </div>
            </div>
        </a>
     );
}

Product.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imagePath: PropTypes.string,
    price: PropTypes.number
};
 
export default Product;