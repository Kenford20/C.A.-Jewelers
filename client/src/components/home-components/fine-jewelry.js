import React from 'react';
import '../../styles/home-styles/color-stones-slider.css';

const JewelryHome = () => {
    return ( 
        <div id="jewelry">
            <a href="/jewelry"><img src={"https://s3.amazonaws.com/media-cajewelers.com/Stackables.jpg"}></img></a>
            <div id="jewelry-description">
                <div id="body-color">
                    <h2 className="body-subtitles"> FINE JEWELRY </h2>
                    <p className="body-text"> Lorem ipsum dolor sit amet, consectetur elit. Reprehenderit dicta ut dignissimos iste repellat temporibus tempore molestiae.</p> 
                    <a href="./jewelry"> Explore Jewelry </a>
                </div> 
            </div>
        </div>
    );
}
 
export default JewelryHome;