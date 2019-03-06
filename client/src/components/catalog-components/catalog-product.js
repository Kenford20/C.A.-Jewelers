import React from 'react';
import PropTypes from 'prop-types';
import { updateProductPage } from '../../actions/productPageActions';
import { connect } from 'react-redux';

import '../../styles/catalog-styles/product.css';

class Product extends React.Component {

    sendProductPageInfo = () => {
        let productInfo = {
            productId: this.props.productId,
            productUrl: this.props.link + this.props.productName.replace(/ +/g, '-').replace(/\//, '-'),
            imgUrl: this.props.imagePath,
            productName: this.props.productName,
            price: this.props.price,
            description: this.props.description,
            categoryRouteName: this.props.category,
            subcategoryRouteName: this.props.style,
            subcategoryRoute: this.props.link
        }
        this.props.updateProductPage(productInfo);
    }

    render() {
        const { link = '/', productName, description, imagePath, altTag = "placeholder tag" } = this.props;
        let productUrl = link + productName.replace(/ +/g, '-').replace(/\//, '-');
        let price = parseFloat(this.props.price * 100 / 100).toFixed(2);

    return ( 
        <a href={ productUrl } className="col-sm-6 col-md-4 col-lg-4 td-none" id="catalog-product" onClick={ this.sendProductPageInfo }>
            <div className="card">
                <img className="card-img-top" src={ imagePath } alt={ altTag }></img>
                <div className="card-body text-center">
                    <h2 className="card-title">{ productName }</h2>
                    <p className="card-text">{ description }</p>
                    <p className="yellow"> $ { 
                        price.toString().length > 6
                        ? price.toString().slice(0, price.toString().length - 6) + ',' + price.toString().slice(price.toString().length - 6) 
                        : price
                    }</p>
                </div>
            </div>
        </a>
     );
    }
}

Product.propTypes = {
    link: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};
 
export default connect(null, { updateProductPage })(Product);