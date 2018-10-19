import React from 'react';
import '../../styles/home-styles/color-stones-carousel.css';

const ColorStones = () => {
    return ( 
        <div id="color-stones">
            <div id="abc" class="carousel slide" data-ride="carousel">
            
	            <div class="carousel-inner">
	                <div class="carousel-item">
	                    <img class="d-block w-100" src={require("../../images/gemstone-carousel/AquamarineRing.jpg")} alt="Aquamarine Ring"></img>
	                </div>
	                <div class="carousel-item active">
	                    <img class="d-block w-100" src={require("../../images/gemstone-carousel/green2.jpg")} alt="Emerald Ring"></img>
	                </div>
	                <div class="carousel-item">
	                    <img class="d-block w-100" src={require("../../images/gemstone-carousel/DiamondRubyBand.jpg")} alt="Ruby Ring"></img>
	                </div>
	            </div>
                <a class="carousel-control-prev" href="#abc" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#abc" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
	        </div>
        </div>
     );
}
 
export default ColorStones;