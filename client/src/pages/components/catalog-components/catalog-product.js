import React, { Component } from 'react';
import '../../styles/catalog-styles/product.css';

// class Product extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return ( 
//             <a href="#" class="col-sm-6 col-md-4 col-lg-4 td-none">
//                 <div class="card">
//                     <img class="card-img-top" src={require("../../images/BeadSet.jpg")} alt="Card image cap"></img>
//                     <div class="card-body text-center">
//                         <h2 class="card-title">{this.props.title}</h2>
//                         <p class="card-text">{this.props.description}</p>
//                         <p>${this.props.price}</p>
//                     </div>
//                 </div>
//             </a>
//          );
//     }
// }
 
//export default Product;

const Product = (props) => {
    return ( 
        <a href={props.link} class="col-sm-6 col-md-4 col-lg-4 td-none" id="catalog-product">
            <div class="card">
                <img class="card-img-top" src={require("../../images/BeadSet.jpg")} alt="Card image cap"></img>
                <div class="card-body text-center">
                    <h2 class="card-title">{props.title}</h2>
                    <p class="card-text">{props.description}</p>
                    <p class="yellow">${props.price}</p>
                </div>
            </div>
        </a>
     );
}
 
export default Product;