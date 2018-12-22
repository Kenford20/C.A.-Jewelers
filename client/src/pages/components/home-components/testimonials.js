import React from 'react';
import Slider from 'react-slick';
import '../../styles/home-styles/testimonials.css';

class Testimonials extends React.Component{
    render(){
        const settings = {
            infinite: true,
            autoplay:true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
          };
    return ( 
        <div id="testimonial" className="container">
            <h2> TESTIMONIALS </h2>
            <Slider {...settings}>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/leon.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title"> Leon Rong </h4>
                            <p className="card-text"> I love my ring! It's so perfectly unique. I had an amazing experience at C.A. Jewelers. Kenny was amazing to work with. He was extremely nice and knowledgable and helped me create exactly what I wanted. 10/10!!</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/david.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title"> David Liang </h4>
                            <p className="card-text">This place is totally awesome my guy. Would def recommend to my guys 5/5!! </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/stu.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Stuart Guan</h4>
                            <p className="card-text"> Got my uvas an amazing ring at an insanely awesome price! Def coming back for the wedding :) </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/eric.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Eric Jiang</h4>
                            <p className="card-text"> Overall experience was not bad. I think Leon could of definitely served me better though. He was kind of slacking in the back playing clash royale, and he said he had to finish his game first. Luckily, Kenny was nice enough to help me out. 9/10 </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/kenny.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Kenny Zhou</h4>
                            <p className="card-text"> I love my ring! It's so perfectly unique. </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/stanford.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Stanley Zheng</h4>
                            <p className="card-text"> Idk I guess this place is pretty good. </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img className="card-img-top img-fluid" src={require("../../images/sam.png")} alt="Card image cap"></img>
                        <div className="card-body">
                            <h4 className="card-title">Sam Kim</h4>
                            <p className="card-text"> I just came here to watch some anime with Leon. He showed me a great time during my visit. Def would come back! </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
     );
    }
}
 
export default Testimonials;