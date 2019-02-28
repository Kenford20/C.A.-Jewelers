import React from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';
import WomensWeddingSlider from '../components/wedding-components/womens-rings-slider';
import MensWeddingSlider from '../components/wedding-components/mens-rings-slider';
import CheapProducts from '../components/jewelry-components/cheap-products';

import '../styles/wedding-styles/wedding.css';

class Jewelry extends React.Component {
    componentDidMount() {
        document.title = 'Anniversary and Wedding Bands | C.A. Jewelers';
    }
    render() {
        return ( 
            <div id="wedding-page">
                <GlobalHeader/>
                    <div id="wedding-header">
                        <img src={require("../images/wedding-header3.jpg")} alt="grayscale image of two newly weds"></img>
                        <div id="wedding-header-text">
                            <h1>Wedding & Anniversary Bands</h1>
                            <button id="wedding-header-btn">Shop Wedding Rings</button>
                        </div>
                    </div>
                    <div id="mens-wedding-section" className="container text-center">
                        <h1>Shop Mens</h1>
                        <p>Laboris incididunt nisi magna laborum nulla minim Lorem adipisicing nisi officia fugiat reprehenderit ipsum commodo. Eu consequat minim et laborum proident ullamco tempor commodo minim magna irure enim sit consequat. Duis reprehenderit proident fugiat laborum nulla commodo tempor ut ut voluptate ex anim cillum.</p>
                        <MensWeddingSlider/>
                    </div>
                    <div id="womens-wedding-section" className="container text-center">
                        <h1>Shop Womens</h1>
                        <p>Non aliquip sit amet velit anim. Fugiat in esse aliquip ex excepteur commodo exercitation fugiat proident excepteur ullamco veniam fugiat voluptate. Aliquip anim elit non excepteur et ut. Qui laboris elit in nostrud do Lorem cupidatat reprehenderit ex. Ea eu irure magna ea nostrud ea minim enim aute cupidatat excepteur ipsum ullamco. Minim consequat voluptate non pariatur esse non occaecat commodo labore veniam esse aliqua exercitation amet. Cillum anim non culpa cillum incididunt ea amet nulla eiusmod nostrud ullamco voluptate.</p>
                        <WomensWeddingSlider/>
                    </div>
                    <CheapProducts/>
                <GlobalFooter/>
            </div>
        );
    }
}
 
export default Jewelry;