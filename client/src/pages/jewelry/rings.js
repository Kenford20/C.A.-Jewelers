import React, { Component } from 'react';
import axios from 'axios';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import ProductsList from '../components/catalog-components/productsList';
import CatalogTop from '../components/catalog-components/catalog-top';
import FilterSort from '../components/catalog-components/filter-sort'; 
import FilterSortMobile from '../components/catalog-components/filter-sort-mobile';
import NumItemsMobile from '../components/catalog-components/num-items-mobile';


class Necklaces extends Component {
    state = {
        products: [],
        numProducts: 0,
    };

    componentDidMount(){
        //let apiEndpoint = 'http://localhost:4000/api/vintage-engagement-rings';
        let apiEndpoint = window.location.origin+'/api/rings-jewelry';

        axios.get(apiEndpoint).then(res=> {
            console.log(res);
            this.setState({products: res.data});
            this.setState({numProducts: this.state.products.length});
        });
    }

    render() { 
        return ( 
            <div id="jewelry-ring-page">
                <GlobalHeader/>
                <CatalogTop heading="Rings" 
                    categoryRoute="/jewelry"
                    categoryRouteName="JEWELRY"
                    subcategoryRouteName="RINGS" 
                    pageDescription="Ut egestas sapien eget enim faucibus, ut lacinia leo molestie. Ut tincidunt a felis sit amet lobortis. Etiam ante ligula, condimentum et augue at, ultrices imperdiet lorem. Morbi scelerisque nibh non nibh vulputate, sit amet lacinia sapien sollicitudin. Nam vitae nisi ultricies, iaculis orci vitae, scelerisque lorem. Donec at maximus quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin congue fringilla posuere. Etiam laoreet, justo id pellentesque sodales, augue mauris ullamcorper tortor, a tristique nisi eros vel tellus. Pellentesque in dolor tempus orci bibendum interdum. Nunc orci felis, lobortis in sollicitudin ut, congue ac lacus. Etiam mi risus, mollis et laoreet congue, dignissim vel ipsum. Curabitur maximus lacinia augue eleifend consequat. Vestibulum enim diam, rhoncus at lorem eget, fringilla vestibulum enim."
                    numProducts={this.state.numProducts}
                />

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FilterSort/>
                            <FilterSortMobile/>
                            <NumItemsMobile numProducts={this.state.numProducts}/>
                        </div>
                       
                        <div className="col-lg-9">
                            <ProductsList products={this.state.products}/>
                        </div>
                    </div>
                </div>
                <GlobalFooter/>    
            </div>
         );
    }
}
 
export default Necklaces;