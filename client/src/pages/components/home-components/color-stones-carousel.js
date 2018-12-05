import React from 'react';
import '../../styles/home-styles/color-stones-carousel.css';

const ColorStones = () => {
    return ( 
        <div id="color-stones">
            <div id="abc" className="carousel slide" data-ride="carousel">
            
	            <div className="carousel-inner">
	                <div className="carousel-item">
	                    <img className="d-block w-100" src={"https://s3.amazonaws.com/media-cajewelers.com/AquamarineRing.jpg"} alt="Aquamarine Ring"></img>
	                </div>
	                <div className="carousel-item active">
	                    <img className="d-block w-100" src={"https://s3.amazonaws.com/media-cajewelers.com/EmeraldRing.jpg"} alt="Emerald Ring"></img>
	                </div>
	                <div className="carousel-item">
	                    <img className="d-block w-100" src={"https://s3.amazonaws.com/media-cajewelers.com/DiamondRubyBand.jpg"} alt="Ruby Ring"></img>
	                </div>
	            </div>
                <a className="carousel-control-prev" href="#abc" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#abc" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
	        </div>
        </div>
     );
}
 
export default ColorStones;