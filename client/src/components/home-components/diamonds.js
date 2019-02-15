import React from 'react';
import Slider from 'react-slick';
import '../../styles/home-styles/diamonds.css';

class Diamonds extends React.Component {
    render(){
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 7,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
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
            <div id="diamonds-container">
                <video width="100%" height="500px" muted={true} autoPlay={true} loop={true} playsInline={true} preload="none" poster="https://s3.amazonaws.com/media-cajewelers.com/diamonds-poster.jpg" className="hidden-xs">
                    <source src="https://s3.amazonaws.com/media-cajewelers.com/rotating-diamonds.mp4" type="video/mp4"></source>
                </video>

                <h2 className="body-subtitles" style={{ textAlign:'center', marginBottom:'35px' }}> C.A. Diamonds by Shape </h2>
                <div id="diamonds-slider">
                <Slider {...settings}>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/princess.png")} style={{ margin: 'auto'}} alt="Princess Cut Diamond"></img>
                        <p>Princess</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/pear.png")} style={{ margin: 'auto'}} alt="Pear Cut Diamond"></img>
                        <p>Pear</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/round.png")} style={{ margin: 'auto'}} alt="Round Cut Diamond"></img>
                        <p>Round</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/emerald.png")} style={{ margin: 'auto'}} alt="Emerald Cut Diamond"></img>
                        <p>Emerald</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/heart.png")} style={{ margin: 'auto'}} alt="Heart Cut Diamond"></img>
                        <p>Heart</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/marquise.png")} style={{ margin: 'auto'}} alt="Marquise Cut Diamond"></img>
                        <p>Marquise</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/radiant.png")} style={{ margin: 'auto'}} alt="Radiant Cut Diamond"></img>
                        <p>Radiant</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/oval.png")} style={{ margin: 'auto'}} alt="Oval Cut Diamond"></img>
                        <p>Oval</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/asscher.png")} style={{ margin: 'auto'}} alt="Asscher Cut Diamond"></img>
                        <p>Asscher</p>
                    </div>
                    <div className="diamonds-div">
                        <img src={require("../../images/diamond-types/cushion.png")} style={{ margin: 'auto'}} alt="Cushion Cut Diamond"></img>
                        <p>Cushion</p>
                    </div>
                    </Slider>
                </div>
            </div>
        );
    }
}
 
export default Diamonds;