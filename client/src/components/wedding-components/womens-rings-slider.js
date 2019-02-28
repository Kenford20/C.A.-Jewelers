import React from 'react';
import Slider from 'react-slick';

import '../../styles/wedding-styles/wedding-sliders.css';

class WomensWeddingSlider extends React.Component {

    render(){
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 4,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 765,
                    settings: {
                        slidesToShow: 3,
                        centerPadding:'0px'
                    }
                }
            ]
        };

    return ( 
        <div id="womens-wedding-slider">
            <Slider {...settings}>
                <a href="#" className="wedding-slider-description">
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} style={{ margin: 'auto'}} alt="Princess Cut Diamond"></img>
                    <p>Classic</p>
                </a>
                <a href="#" className="wedding-slider-description">
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} style={{ margin: 'auto'}} alt="Pear Cut Diamond"></img>
                    <p>Anniversary</p>
                </a>
                <a href="#" className="wedding-slider-description">
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} style={{ margin: 'auto'}} alt="Round Cut Diamond"></img>
                    <p>Eternity</p>
                </a>
                <a href="#" className="wedding-slider-description">
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} style={{ margin: 'auto'}} alt="Emerald Cut Diamond"></img>
                    <p>Stackable</p>
                </a>
                <a href="#" className="wedding-slider-description">
                    <img src={"https://s3.amazonaws.com/media-cajewelers.com/Wide3row.jpg"} style={{ margin: 'auto'}} alt="Heart Cut Diamond"></img>
                    <p>Diamond</p>
                </a>
            </Slider>
        </div>
        );
    }
}
 
export default WomensWeddingSlider;