import React from 'react';
import MiniCartItem from './mini-cart-item';
import { removeFromCart } from '../../actions/cartActions';
import { connect } from 'react-redux';

class HeaderNavbar2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMiniCart: false
    }
  }

  removeItem = (itemId, itemPrice) => {
    // this.setState({ loading: true });
    // setTimeout(() => { this.setState({ loading: false })}, 1000);
    // maybe add a global loader component thats absolute centered and dims the background
    let removedItemInfo = {
      id: itemId,
      price: itemPrice
    }
    this.props.removeFromCart(removedItemInfo);
  }

  revealMiniCart = () => {
    this.setState({ showMiniCart: true });
  }
  hideMiniCart = () => {
    this.setState({ showMiniCart: false });
  }

  render(){
    const { subTotal } = this.props;

    const miniCartItems = (
      this.props.cartItems.map(item => (
        <MiniCartItem
          key = { item.productId }
          productUrl = { item.productUrl }
          imgUrl = { item.imgUrl }
          productId = { item.productId }
          name = { item.name }
          price = { parseFloat(item.price).toFixed(2) }
          removeItem = { this.removeItem }
        />
      ))
    );

    return ( 
        <div id="header-nav2" className="hide container">
            <nav className="navbar navbar-expand-md navbar-dark">
              <a id="header-logo" className="center" href="/"><img src={require("../../images/logo2.png")} alt="logo" height="45px" width="125px"></img></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li className="nav-item dropdown">
        <a href="/engagement-rings/all-rings" className="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          ENGAGEMENT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row w-60 ml-auto">
            <div className="col-md-3">
              <span className="text-uppercase">shop by style</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/solitaire-rings"> Solitaire </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/halo-rings"> Halo </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/three-stone-rings"> Three Stone </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Vintage </a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <span className="text-uppercase">shop by shape</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Round</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Oval</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Princess Cut</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Radiant Cut</a></li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <a href=""><img src={"https://s3.amazonaws.com/media-cajewelers.com/BridalSetPrincess.jpg"} alt="engagement-thumbnail" width="300px" height="200px" ></img></a>              
            </div>
          </div>
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a href="/wedding" className="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          WEDDING
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row w-60 ml-auto">
            <div className="col-md-3">
              <span className="text-uppercase">women</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="/wedding/womens-wedding-rings"> Women's Wedding Rings </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/halo-rings"> Anniversary Rings </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/three-stone-rings"> Diamond Rings </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Top 10 Choices </a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <span className="text-uppercase">Men</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="/wedding/mens-wedding-rings">Men's Wedding Rings</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Diamond Rings</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Carved Rings</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/engagement-rings/vintage-rings"> Top 10 Choices </a></li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <a href=""><img src={require("../../images/wedding-thumbnail.jpeg")} alt="engagement-thumbnail" width="300px" height="200px" ></img></a>              
            </div>
          </div>
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a href="/jewelry" className="nav-link dropdown-toggle nav-link-spacing" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
          JEWELRY
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="row w-60 ml-auto">
            <div className="col-md-3">
              <span className="text-uppercase">Category</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="/jewelry/rings"> Rings </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/jewelry/necklaces"> Necklaces </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/jewelry/earrings"> Earrings </a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="/jewelry/bracelets"> Bracelets </a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <span className="text-uppercase">gifts</span>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Browse Gifts</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Gifts under $300</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Anniversary Gifts</a></li>
                <li className="nav-item"><a className="nav-link nav-link-align" href="#">Top 10 Gifts</a></li>
              </ul>
            </div>
            <div className="col-md-6 text-center">
              <a href="/jewelry">
                <img src={"https://s3.amazonaws.com/media-cajewelers.com/Settings.jpg"} alt="engagement-thumbnail" width="300px" height="200px" ></img>
              </a>              
            </div>
          </div>
        </div>
      </li>

      <li className="nav-item"><a className="nav-link nav-link-spacing" href="/about" >ABOUT</a></li>
      <li className="nav-item"><a className="nav-link nav-link-spacing" href="/contact" >CONTACT</a></li>
      <li className="nav-item"><a className="nav-link nav-link-spacing" href="/education" >EDUCATION</a></li>
    </ul>
    <div id="header-icons">
      <a href="#"><i className="fas fa-search"></i></a>
      <a href="#"><i className="fas fa-address-book"></i></a>
      <a 
        href="/cart" 
        id="cart-icon" 
        onMouseOver={ this.revealMiniCart } 
        onMouseLeave={ this.hideMiniCart }
        style={{ boxShadow: this.state.showMiniCart ? '0 3px 10px 1px rgba(0, 0, 0, 0.3)' : '0 0 0 0' }}
      >
        <i className="fas fa-shopping-bag"></i><div id="num-cart-items">{ this.props.numItemsInBag }</div>
      </a>
    </div>

      {/* render mini cart only if an item exists in the cart */}
      { this.props.cartItems.length !== 0 && (
        <div 
          id="mini-cart-header" 
          onMouseOver={ this.revealMiniCart } 
          onMouseLeave={ this.hideMiniCart }
          style={{ display: this.state.showMiniCart ? 'block' : 'none' }}
        >
          { miniCartItems }
          <p id="mini-cart-subtotal">SUBTOTAL: 
            <span style={{ marginLeft: '10px' }}>$
              { 
                subTotal.toString().length > 6
                ? subTotal.toString().slice(0, subTotal.toString().length - 6) + ',' + subTotal.toString().slice(subTotal.toString().length - 6) 
                : subTotal
              }
            </span>
          </p>
          <div id="mini-cart-btns-wrapper">
            <a href="/cart" id="mini-cart-btn" className="mini-cart-btns">CART</a>
            <a href="#" id="mini-cart-checkout" className="mini-cart-btns">CHECKOUT</a>
          </div>
        </div>
      )}
  </div>
</nav>
</div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  numItemsInBag: state.cart.numItems,
  subTotal: state.cart.subTotal
});

export default connect(mapStateToProps, { removeFromCart })(HeaderNavbar2);