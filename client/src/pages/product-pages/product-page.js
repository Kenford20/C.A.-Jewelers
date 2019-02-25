import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GlobalHeader from '../../components/global-header';
import GlobalFooter from '../../components/global-footer';
import ProductPageLayout from './page-skeleton';
import SimilarNecklaces from './similar-products/similar-necklaces';


class ProductPage extends Component {

    determineRoute = () => {
        switch(this.props.categoryRouteName) {
            case 'engagement rings': return '/engagement-rings';
            case 'jewelry': return '/jewelry';
            case 'wedding': return '/wedding';

            default: return '/';
        }
    }

    render() { 
        let categoryRoute = this.determineRoute();
        
        return ( 
            <div className="product-page">
                <GlobalHeader/>
                <ProductPageLayout
                    productId = { this.props.productId }
                    productUrl = { this.props.productUrl }
                    imgUrl={ this.props.imgUrl }
                    productName={ this.props.productName }
                    price={ this.props.price }
                    description={ this.props.description }
                    categoryRoute={ categoryRoute }
                    categoryRouteName={ this.props.categoryRouteName } 
                    subcategoryRoute={ this.props.subcategoryRoute }
                    subcategoryRouteName={ this.props.subcategoryRouteName }
                />
                <SimilarNecklaces/>
                <GlobalFooter/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productId: state.product.productId,
    productUrl: state.product.productUrl,
    imgUrl: state.product.imgUrl,
    productName: state.product.productName,
    price: state.product.price,
    description: state.product.description,
    categoryRouteName: state.product.categoryRouteName,
    subcategoryRouteName: state.product.subcategoryRouteName,
    subcategoryRoute: state.product.subcategoryRoute
});

ProductPage.propTypes = { 
    productId: PropTypes.string.productId,
    productUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    categoryRouteName: PropTypes.string.isRequired,
    subcategoryRouteName: PropTypes.string.isRequired,
    subcategoryRoute: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ProductPage);