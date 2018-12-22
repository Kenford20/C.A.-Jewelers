import React from 'react';
import Slider from "react-slick";
import '../../styles/home-styles/color-stones-slider.css';

class ColorStonesSlider extends React.Component{
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
    return ( 
        <div id="color-stones-slider">
            <Slider {...settings}>
                <div>
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/EmeraldRing.jpg"} alt="Emerald Ring"></img>
                </div>
                <div>
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/AquamarineRing.jpg"} alt="Aquamarine Ring"></img>
                </div>
                <div>
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/DiamondRubyBand.jpg"} alt="Diamond Ruby Band Ring"></img>
                </div>
                <div>
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/EmeraldRing.jpg"} alt="Emerald Ring"></img>
                </div>
            </Slider>
            <div id="color-stone-description">
                <div id="body-color">
                    <h2 className="body-subtitles"> UNIQUE GEMSTONES </h2>
                    <p className="body-text"> Lorem ipsum dolor sit amet, consectetur elit. Reprehenderit dicta ut dignissimos iste repellat temporibus tempore molestiae.</p> 
                    <a href="./jewelry"> Explore Jewelry </a>
                </div> 
            </div>
        </div>
     );
    }
}
 
export default ColorStonesSlider;