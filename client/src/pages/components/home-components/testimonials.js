import React from 'react';
import '../../styles/home-styles/testimonials.css';

const Testimonials = () => {
    return ( 
        <div>
            <div class="container text-center" id="testimonials">
                <h3> TESTIMONIALS </h3>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto">
                        <div class="carousel-item col-md-4 active">
                            <div class="card">
                                <img class="card-img-top img-fluid" src={require("../../images/leon.png")} alt="Card image cap"></img>
                                <div class="card-body">
                                    <h4 class="card-title"> Leon Rong </h4>
                                    <p class="card-text"> I love my ring! It's so perfectly unique. I had an amazing experience at C.A. Jewelers. Kenny was amazing to work with. He was extremely nice and knowledgable and helped me create exactly what I wanted. 10/10!!</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/david.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title"> David Liang </h4>
                                <p class="card-text">This place is totally awesome my guy. Would def recommend to my guys 5/5!! </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/stu.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Stuart Guan</h4>
                                <p class="card-text"> Got my uvas an amazing ring at an insanely awesome price! Def coming back for the wedding :) </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/eric.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Eric Jiang</h4>
                                <p class="card-text"> Overall experience was not bad. I think Leon could of definitely served me better though. He was kind of slacking in the back playing clash royale, and he said he had to finish his game first. Luckily, Kenny was nice enough to help me out. 9/10 </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/kenny.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Kenny Zhou</h4>
                                <p class="card-text"> I love my ring! It's so perfectly unique. </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/stanford.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Stanley Zheng</h4>
                                <p class="card-text"> Idk I guess this place is pretty good. </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item col-md-4">
                            <div class="card">
                            <img class="card-img-top img-fluid" src={require("../../images/sam.png")} alt="Card image cap"></img>
                            <div class="card-body">
                                <h4 class="card-title">Sam Kim</h4>
                                <p class="card-text"> I just came here to watch some anime with Leon. He showed me a great time during my visit. Def would come back! </p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Testimonials;