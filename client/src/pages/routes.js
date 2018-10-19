import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home';
import Education from './education';
import About from './about';
import Contact from './contact';
import FAQ from './faq';
import EngagementRings from './engagement-rings';
import Jewelry from './jewelry';
import CustomDesign from './custom-design-page';
import Whoops404 from './whoops';

import AllRings from './engagement-rings/all-rings';
import HaloEngagementRings from './engagement-rings/halo-rings';
import SolitaireEngagementRings from './engagement-rings/solitaire-rings';
import ThreeStoneEngagementRings from './engagement-rings/three-stone-rings';
import VintageEngagementRings from './engagement-rings/vintage-rings';

import MensWeddingRings from './wedding/mens-wedding';
import WomensWeddingRings from './wedding/womens-wedding';

import Bracelets from './jewelry/bracelets';
import Earrings from './jewelry/earrings';
import Necklaces from './jewelry/necklaces';
import Rings from './jewelry/rings';

import SirenaDiamondNecklace from './product-pages/necklaces/sirena-diamond-necklace';

export default () => (
  <BrowserRouter>
  	<Switch>
	    <Route exact path='/' component={Home} />
	    <Route path='/education'component={Education} />
	    <Route path='/about' component={About} />
	    <Route path='/contact' component={Contact} />
		<Route path='/faq' component={FAQ} />
		<Route path='/custom-design-jewelry' component={CustomDesign}/>

		<Route exact path='/engagement-rings' component={EngagementRings} />
		<Route path='/engagement-rings/all-rings' component={AllRings} />
		<Route path='/engagement-rings/halo-rings' component={HaloEngagementRings} />
		<Route path='/engagement-rings/solitaire-rings' component={SolitaireEngagementRings} />
		<Route path='/engagement-rings/three-stone-rings' component={ThreeStoneEngagementRings} />
		<Route path='/engagement-rings/vintage-rings' component={VintageEngagementRings} />

		<Route path='/wedding/mens-wedding-rings' component={MensWeddingRings} />
		<Route path='/wedding/womens-wedding-rings' component={WomensWeddingRings} />

		<Route exact path='/jewelry' component={Jewelry} />
		<Route exact path='/jewelry/bracelets' component={Bracelets}/>
		<Route exact path='/jewelry/earrings' component={Earrings}/>
		<Route exact path='/jewelry/necklaces' component={Necklaces}/>
		<Route exact path='/jewelry/rings' component={Rings}/>

		<Route path='/jewelry/necklaces/sirena-diamond-necklace' component={SirenaDiamondNecklace}/>

	    <Route component={Whoops404}/>
    </Switch>
 </BrowserRouter>
);