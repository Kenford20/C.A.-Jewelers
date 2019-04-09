import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home';
import Education from './education';
import About from './about';
import Contact from './contact';
import FAQ from './faq';
import CustomDesign from './custom-design-page';
import Cart from './cart';
import Checkout from './checkout';
import OrderConfirmation from './order-confirmation';
import OrderSuccess from './order-success';
import Whoops404 from './whoops';

import EngagementRings2 from './engagement2';
import EngagementRings from './engagement-rings';
import AllRings from './engagement-rings/all-rings';
import HaloEngagementRings from './engagement-rings/halo-rings';
import SolitaireEngagementRings from './engagement-rings/solitaire-rings';
import ThreeStoneEngagementRings from './engagement-rings/three-stone-rings';
import VintageEngagementRings from './engagement-rings/vintage-rings';

import Wedding2 from './wedding2';
import MensWeddingRings from './wedding/mens-wedding';
import WomensWeddingRings from './wedding/womens-wedding';

import Jewelry from './jewelry';
import Bracelets from './jewelry/bracelets';
import Earrings from './jewelry/earrings';
import Necklaces from './jewelry/necklaces';
import Rings from './jewelry/rings';

import ProductPage from './product-pages/product-page';
import HaloMarquiseWhiteGold from './product-pages/engagement-rings/halo-marquise-whitegold';
import SirenaDiamondNecklace from './product-pages/necklaces/sirena-diamond-necklace';

class Routes extends React.Component {
	render(){
		let productPath = this.props.subcategoryRoute + this.props.productName.replace(/ +/g, '-').replace(/\//, '-');
	return(
  <BrowserRouter>
  	<Switch>
	    <Route exact path='/' component={Home} />
	    <Route exact path='/education'component={Education} />
	    <Route exact path='/about' component={About} />
	    <Route exact path='/contact' component={Contact} />
		<Route exact path='/faq' component={FAQ} />
		<Route exact path='/custom-design-jewelry' component={CustomDesign}/>
		<Route exact path='/cart' component={Cart}/>
		<Route exact path='/checkout' component={Checkout}/>
		<Route exact path='/order-confirmation' component={OrderConfirmation}/>
		<Route exact path='/order-success' component={OrderSuccess}/>

		<Route exact path='/engagement' component={EngagementRings2} />
		<Route exact path='/engagement-rings/all-rings' component={AllRings} />
		<Route exact path='/engagement-rings/halo-rings' component={HaloEngagementRings} />
		<Route exact path='/engagement-rings/solitaire-rings' component={SolitaireEngagementRings} />
		<Route exact path='/engagement-rings/three-stone-rings' component={ThreeStoneEngagementRings} />
		<Route exact path='/engagement-rings/vintage-rings' component={VintageEngagementRings} />

		<Route exact path='/wedding' component={Wedding2} />
		<Route exact path='/wedding/mens-wedding-rings' component={MensWeddingRings} />
		<Route exact path='/wedding/womens-wedding-rings' component={WomensWeddingRings} />

		<Route exact path='/jewelry' component={Jewelry} />
		<Route exact path='/jewelry/bracelets' component={Bracelets}/>
		<Route exact path='/jewelry/earrings' component={Earrings}/>
		<Route exact path='/jewelry/necklaces' component={Necklaces}/>
		<Route exact path='/jewelry/rings' component={Rings}/>

		<Route exact path={ productPath } component={ProductPage}/>
		<Route exact path='/jewelry/necklaces/sirena-diamond-necklace' component={SirenaDiamondNecklace}/>

	    <Route component={Whoops404}/>
    </Switch>
 </BrowserRouter>
 		)
	}
}

const mapStateToProps = state => ({
	subcategoryRoute: state.product.subcategoryRoute,
	productName: state.product.productName
});

export default connect(mapStateToProps)(Routes);