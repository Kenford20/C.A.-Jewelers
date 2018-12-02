import React, { Component } from 'react';
import axios from 'axios';
import Product from './catalog-product';
import '../../styles/catalog-styles/products-list.css';

class ProductsList extends Component {
    // state = {
    //     products:[],
    // };
    //mongodb://Kenny:kzhou123@ds261072.mlab.com:61072/ca-products

    // componentDidMount(){
    //     // let apiEndpoint = 'http://localhost:4000/api/products' + '/props.endpoint';
    //     let apiEndpoint = 'http://localhost:4000/api/' + this.props.apiEndpoint;
    //     axios.get(apiEndpoint).then(res=> {
    //         console.log(res);
    //         this.setState({products: res.data});
    //     });
    // }

    render() { 
        return ( 
            <div>
                <div className="container">
                    {this.props.products.map(product => 
                        <Product 
                            key={product._id} 
                            path={product.imagePath} title={product.title} 
                            description={product.description} price={product.price} 
                            link={product.link}
                        />
                    )}
                </div>
            </div>
         );
    }
}
 
export default ProductsList;
